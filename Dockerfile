# Step 1: Build the React aypp
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Step 2: Serve the React app using Nginx
FROM nginx:alpine

# Copy the build folder from the previous build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port the app will run on
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]

