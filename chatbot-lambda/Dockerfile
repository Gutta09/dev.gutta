# Use AWS Lambda Node.js 20 base image
FROM public.ecr.aws/lambda/nodejs:20

# Copy package files
COPY package.json package-lock.json* ./

# Install production dependencies
RUN npm ci --production

# Copy application code and training data
COPY index.mjs chain.mjs ./
COPY data.txt ./

# Set the Lambda handler
CMD ["index.handler"]
