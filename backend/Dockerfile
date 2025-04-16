# Build
FROM node:22-slim AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Package
FROM node:22-slim

WORKDIR /app

RUN apt-get update -y && apt-get install -y openssl

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/noticias.json ./
COPY --from=builder /app/src ./src

RUN npm install --omit=dev
RUN npx prisma generate

EXPOSE 3001

# Espera 10 segundos para o banco subir, depois roda as migrações, seed e inicia o app
CMD ["sh", "-c", "sleep 10 && npx prisma migrate deploy && node dist/scripts/seed.js && node dist/main.js"]

