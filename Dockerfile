# Use the official Node.js image as the base image
FROM node:22.13.1

# Set the working directory in the container
WORKDIR /app

# Set yarn version
RUN npm uninstall -g yarn
RUN corepack enable
RUN yarn set version 3.6.4

# Expose the port the app runs on (adjust if needed)
EXPOSE 3000