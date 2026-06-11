FROM node:22-slim

WORKDIR /app

COPY .output ./.output
COPY .env ./

ENV HOST=0.0.0.0
ENV PORT=18217
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=18217

EXPOSE 18217

CMD ["node", ".output/server/index.mjs"]