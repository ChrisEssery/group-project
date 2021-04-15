# We use the official image as a parent image.
FROM node:12.16.1-alpine As builder

# Set the working directory.
WORKDIR /usr/src/app

# Copy the file(s) from your host to your current location.
COPY package.json package-lock.json ./

# Run the command inside your image filesystem.
RUN npm install

RUN npm install cors

COPY . .

# Building the website
RUN npm run build --prod

FROM nginx:1.15.8-alpine

COPY --from=builder /usr/src/app/dist/group-project/ /usr/share/nginx/html