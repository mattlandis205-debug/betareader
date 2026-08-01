# Build and production environment
FROM node:18-alpine

WORKDIR /app

# Copy dependency definitions
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy all source files
COPY . .

# Build the production bundle
RUN npm run build

# Expose port (default for Cloud Run, but overridden by environment)
EXPOSE 8080

# Serve static directory using sirv-cli, listening on the Cloud Run PORT environment variable
CMD ["sh", "-c", "npx sirv dist --single --host 0.0.0.0 --port $PORT"]
