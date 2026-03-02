# Gbot — Serverless Chatbot

A serverless chatbot built with **Node.js**, **AWS Lambda**, **API Gateway**, **ECR**, and **LangChain** (OpenAI) that answers questions about you on your portfolio website.

## Architecture

```
┌─────────────────┐     ┌──────────────┐     ┌──────────────────┐
│   Astro Website  │────▶│ API Gateway  │────▶│  AWS Lambda (ECR) │
│   (Frontend)     │◀────│   (HTTP API)  │◀────│  LangChain + OAI  │
└─────────────────┘     └──────────────┘     └──────────────────┘
                                                      │
                                               ┌──────┴──────┐
                                               │   data.txt   │
                                               │ (Training)   │
                                               └─────────────┘
```

## Setup

### 1. Prerequisites

- [AWS CLI](https://aws.amazon.com/cli/) configured with your credentials (`aws configure`)
- [Docker](https://docs.docker.com/get-docker/) installed and running
- [Node.js 20+](https://nodejs.org/)
- An [OpenAI API Key](https://platform.openai.com/api-keys)

### 2. Customize Training Data

Edit `data.txt` in the project root with facts about yourself. Each line is a statement the bot will use to answer questions.

### 3. Deploy

```bash
cd chatbot-lambda
chmod +x deploy.sh
./deploy.sh
```

The script will:
1. Copy `data.txt` into the Lambda container
2. Create an ECR repository and push the Docker image
3. Create the Lambda function with the container image
4. Set up API Gateway with CORS support
5. Print your API endpoint URL

### 4. Set OpenAI Key

```bash
aws lambda update-function-configuration \
  --function-name gbot \
  --environment 'Variables={OPENAI_API_KEY=sk-your-key-here}' \
  --region us-east-2
```

### 5. Update Frontend

In `src/components/About.astro`, replace `YOUR_API_GATEWAY_URL_HERE` with the API endpoint URL printed by the deployment script.

## Local Development

```bash
cd chatbot-lambda
npm install
# Create a .env file with your OPENAI_API_KEY
cp .env.example .env
# Edit .env with your actual key
```

## Updating Training Data

1. Edit `data.txt` in the project root
2. Re-run `./deploy.sh` from the `chatbot-lambda/` directory
3. The new data will be embedded and available immediately

## Tech Stack

| Component | Technology |
|-----------|------------|
| Frontend | Astro + Tailwind CSS |
| Backend | Node.js + LangChain |
| LLM | OpenAI GPT-3.5-turbo |
| Vector Store | HNSWLib |
| Hosting | AWS Lambda (ECR container) |
| API | AWS API Gateway (HTTP API) |
| CDN | AWS CloudFront (optional) |
