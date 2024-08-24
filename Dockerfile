# Use the official Node.js image as a base
FROM node:16

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Set environment variables (can be overridden in docker-compose)
ENV PORT=3000

# Expose the port
EXPOSE 3000

# Run the application
CMD ["npm", "start"]
