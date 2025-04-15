FROM node:22-slim as builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx prisma generate
RUN npx nest build

FROM node:22-slim

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/noticias.json ./noticias.json
COPY --from=builder /app/src/scripts ./src/scripts

RUN npx prisma generate
RUN npx prisma migrate deploy
RUN node src/scripts/seed.ts

EXPOSE 3001

CMD ["node", "dist/main.js"]
