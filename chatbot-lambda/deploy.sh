#!/bin/bash
# =============================================================================
# Gbot Lambda Deployment Script
# Deploys the chatbot to AWS using ECR + Lambda + API Gateway
# =============================================================================
#
# Prerequisites:
#   - AWS CLI configured (aws configure)
#   - Docker installed and running
#   - An OpenAI API key
#
# Usage:
#   chmod +x deploy.sh
#   ./deploy.sh
# =============================================================================

set -e

# ─── Configuration ──────────────────────────────────────────────────────────
AWS_REGION="us-east-2"                    # Change to your preferred region
AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
ECR_REPO_NAME="gbot-lambda"
LAMBDA_FUNCTION_NAME="gbot"
LAMBDA_ROLE_NAME="gbot-lambda-role"
API_NAME="gbot-api"
IMAGE_TAG="latest"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  Gbot Lambda Deployment"
echo "  Account: $AWS_ACCOUNT_ID"
echo "  Region:  $AWS_REGION"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# ─── Step 1: Copy training data into lambda directory ───────────────────────
echo ""
echo "📋 Step 1: Copying training data..."
cp ../data.txt ./data.txt
echo "   ✅ data.txt copied"

# ─── Step 2: Install dependencies & build ───────────────────────────────────
echo ""
echo "📦 Step 2: Installing dependencies..."
npm ci
echo "   ✅ Dependencies installed"

# ─── Step 3: Create ECR Repository ─────────────────────────────────────────
echo ""
echo "🏗️  Step 3: Creating ECR repository..."
aws ecr describe-repositories --repository-names $ECR_REPO_NAME --region $AWS_REGION 2>/dev/null || \
aws ecr create-repository --repository-name $ECR_REPO_NAME --region $AWS_REGION
echo "   ✅ ECR repository ready"

# ─── Step 4: Login to ECR ──────────────────────────────────────────────────
echo ""
echo "🔑 Step 4: Logging into ECR..."
aws ecr get-login-password --region $AWS_REGION | \
  docker login --username AWS --password-stdin $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com
echo "   ✅ Logged into ECR"

# ─── Step 5: Build Docker Image ────────────────────────────────────────────
echo ""
echo "🐳 Step 5: Building Docker image..."
docker build --platform linux/amd64 -t $ECR_REPO_NAME .
echo "   ✅ Image built"

# ─── Step 6: Tag & Push Image ──────────────────────────────────────────────
echo ""
echo "🚀 Step 6: Pushing image to ECR..."
docker tag $ECR_REPO_NAME:latest $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPO_NAME:$IMAGE_TAG
docker push $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPO_NAME:$IMAGE_TAG
echo "   ✅ Image pushed"

# ─── Step 7: Create IAM Role (if not exists) ───────────────────────────────
echo ""
echo "👤 Step 7: Setting up IAM role..."
ROLE_ARN=$(aws iam get-role --role-name $LAMBDA_ROLE_NAME --query 'Role.Arn' --output text 2>/dev/null || true)
if [ -z "$ROLE_ARN" ] || [ "$ROLE_ARN" = "None" ]; then
  TRUST_POLICY='{
    "Version": "2012-10-17",
    "Statement": [{
      "Effect": "Allow",
      "Principal": { "Service": "lambda.amazonaws.com" },
      "Action": "sts:AssumeRole"
    }]
  }'
  ROLE_ARN=$(aws iam create-role \
    --role-name $LAMBDA_ROLE_NAME \
    --assume-role-policy-document "$TRUST_POLICY" \
    --query 'Role.Arn' --output text)
  aws iam attach-role-policy --role-name $LAMBDA_ROLE_NAME \
    --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole
  echo "   ⏳ Waiting for IAM role propagation..."
  sleep 10
fi
echo "   ✅ IAM Role: $ROLE_ARN"

# ─── Step 8: Create or Update Lambda Function ──────────────────────────────
echo ""
echo "⚡ Step 8: Deploying Lambda function..."
IMAGE_URI="$AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPO_NAME:$IMAGE_TAG"

LAMBDA_EXISTS=$(aws lambda get-function --function-name $LAMBDA_FUNCTION_NAME --region $AWS_REGION 2>/dev/null && echo "yes" || echo "no")

if [ "$LAMBDA_EXISTS" = "yes" ]; then
  aws lambda update-function-code \
    --function-name $LAMBDA_FUNCTION_NAME \
    --image-uri $IMAGE_URI \
    --region $AWS_REGION > /dev/null
  echo "   ✅ Lambda function updated"
else
  aws lambda create-function \
    --function-name $LAMBDA_FUNCTION_NAME \
    --package-type Image \
    --code ImageUri=$IMAGE_URI \
    --role $ROLE_ARN \
    --timeout 60 \
    --memory-size 512 \
    --environment "Variables={OPENAI_API_KEY=YOUR_OPENAI_KEY_HERE}" \
    --region $AWS_REGION > /dev/null
  echo "   ✅ Lambda function created"
fi

# ─── Step 9: Wait for Lambda to be active ──────────────────────────────────
echo ""
echo "⏳ Step 9: Waiting for Lambda to be active..."
aws lambda wait function-active --function-name $LAMBDA_FUNCTION_NAME --region $AWS_REGION
echo "   ✅ Lambda is active"

# ─── Step 10: Create API Gateway (HTTP API) ────────────────────────────────
echo ""
echo "🌐 Step 10: Setting up API Gateway..."
API_ID=$(aws apigatewayv2 get-apis --region $AWS_REGION \
  --query "Items[?Name=='$API_NAME'].ApiId" --output text 2>/dev/null || true)

if [ -z "$API_ID" ] || [ "$API_ID" = "None" ]; then
  LAMBDA_ARN=$(aws lambda get-function --function-name $LAMBDA_FUNCTION_NAME \
    --region $AWS_REGION --query 'Configuration.FunctionArn' --output text)

  API_ID=$(aws apigatewayv2 create-api \
    --name $API_NAME \
    --protocol-type HTTP \
    --cors-configuration "AllowOrigins=*,AllowMethods=POST,OPTIONS,AllowHeaders=Content-Type" \
    --region $AWS_REGION \
    --query 'ApiId' --output text)

  INTEGRATION_ID=$(aws apigatewayv2 create-integration \
    --api-id $API_ID \
    --integration-type AWS_PROXY \
    --integration-uri $LAMBDA_ARN \
    --payload-format-version "2.0" \
    --region $AWS_REGION \
    --query 'IntegrationId' --output text)

  aws apigatewayv2 create-route \
    --api-id $API_ID \
    --route-key "POST /ask" \
    --target "integrations/$INTEGRATION_ID" \
    --region $AWS_REGION > /dev/null

  aws apigatewayv2 create-stage \
    --api-id $API_ID \
    --stage-name '$default' \
    --auto-deploy \
    --region $AWS_REGION > /dev/null

  # Grant API Gateway permission to invoke Lambda
  aws lambda add-permission \
    --function-name $LAMBDA_FUNCTION_NAME \
    --statement-id apigateway-invoke \
    --action lambda:InvokeFunction \
    --principal apigateway.amazonaws.com \
    --source-arn "arn:aws:execute-api:$AWS_REGION:$AWS_ACCOUNT_ID:$API_ID/*" \
    --region $AWS_REGION > /dev/null 2>&1 || true

  echo "   ✅ API Gateway created"
else
  echo "   ✅ API Gateway already exists"
fi

API_URL="https://$API_ID.execute-api.$AWS_REGION.amazonaws.com/ask"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  🎉 Deployment Complete!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "  API Endpoint: $API_URL"
echo ""
echo "  ⚠️  IMPORTANT Next Steps:"
echo "  1. Set your OpenAI API key in Lambda environment variables:"
echo "     aws lambda update-function-configuration \\"
echo "       --function-name $LAMBDA_FUNCTION_NAME \\"
echo "       --environment 'Variables={OPENAI_API_KEY=sk-your-key-here}' \\"
echo "       --region $AWS_REGION"
echo ""
echo "  2. Update your frontend API endpoint in:"
echo "     src/components/About.astro"
echo "     Replace 'YOUR_API_GATEWAY_URL_HERE' with:"
echo "     $API_URL"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
