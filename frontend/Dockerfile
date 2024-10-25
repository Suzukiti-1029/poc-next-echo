# syntax=docker/dockerfile:1
FROM node:22.10.0-alpine

WORKDIR /usr/src/app
EXPOSE 3000

COPY ./app/package*.json ./

# BuildKitでビルドを跨いでデータを保持
RUN \
  --mount=type=cache,target=/root/.npm \
  --mount=type=cache,target=/workspace/node_modules \
  npm config set save-exact=true \
  && npm install -g pnpm @antfu/ni \
  && nci
