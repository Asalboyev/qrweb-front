FROM node:22-slim AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:22-slim

WORKDIR /app

COPY --from=builder /app/.output ./.output

ENV HOST=0.0.0.0
ENV PORT=18217
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=18217

EXPOSE 18217

CMD ["node", ".output/server/index.mjs"]
