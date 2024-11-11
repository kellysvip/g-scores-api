FROM node:18-alpine

# RUN mkdir /app

# WORKDIR /app

# COPY ./ /app

# RUN npm install

# CMD ["npm", "run", "start:dev"]
# Use Alpine Linux as the base image
# FROM alpine:latest

# Create app directory
RUN mkdir /app

# Set working directory
WORKDIR /app

# Install Node.js and npm
RUN apk add --no-cache nodejs npm

# Copy package.json and package-lock.json separately to leverage Docker cache for dependencies
COPY package*.json ./

# Clean npm cache and force install dependencies

# Copy the rest of the application files
COPY ./ /app

# Expose the port the app runs on (specify the correct port)
EXPOSE 3000

RUN npm install -f
# Use JSON syntax for CMD to ensure proper handling of npm
CMD ["npm", "run", "start"]
