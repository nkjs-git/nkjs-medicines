# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /my-webapp

# Copy package.json and package-lock.json to the container
COPY package.json /my-webapp

COPY src/ /my-webapp

RUN npm install

# Expose a port for the Node.js application
EXPOSE 8080

# Start the Node.js application
CMD [ "npm", "run", "start:dev" ]