### Build image ###
FROM node:alpine AS BUILD_IMAGE

# Install Nest CLI
RUN yarn global add @nestjs/cli

# Copy & build
COPY . /var/build
WORKDIR /var/build
RUN yarn
RUN yarn build

# Node Prune
RUN apk add curl
RUN curl -sf https://gobinaries.com/tj/node-prune | sh
RUN node-prune

### Main Image ###
FROM node:alpine
LABEL maintainer="Vinicius Egidio <me@vinicius.io>"

# Define the image version
ARG VERSION
ENV IMAGE_VERSION=$VERSION

# Copy build files
COPY --from=BUILD_IMAGE /var/build/dist /var/www/dist
COPY --from=BUILD_IMAGE /var/build/node_modules /var/www/node_modules
COPY --from=BUILD_IMAGE /var/build/package.json /var/www/package.json
WORKDIR /var/www

EXPOSE 3000

# Start with Yarn
CMD yarn start:prod