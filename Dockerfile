### Build image ###
FROM oven/bun:alpine AS build_image

# Install build dependencies
RUN apk add --no-cache python3

# Install Nest CLI
RUN bun install --global @nestjs/cli

# Copy & build
COPY . /var/build
WORKDIR /var/build
RUN bun install && bun run build

# Node Prune
RUN apk add curl
RUN curl -sf https://gobinaries.com/tj/node-prune | sh
RUN node-prune

### Main Image ###
FROM oven/bun:alpine
LABEL maintainer="Vinicius Egidio <me@vinicius.io>"

# Define the image version
ARG VERSION
ENV IMAGE_VERSION=$VERSION

# Copy build files
COPY --from=build_image /var/build/dist /var/www/dist
COPY --from=build_image /var/build/node_modules /var/www/node_modules
COPY --from=build_image /var/build/package.json /var/www/package.json
WORKDIR /var/www

EXPOSE 3000

# Start with Yarn
CMD bun start:prod