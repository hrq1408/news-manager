FROM node:22-slim as builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx nest build

FROM node:22-slim

WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package*.json ./
RUN npx prisma generate
RUN npx prisma migrate dev --name init
RUN npm run seed
RUN npm install --omit=dev

EXPOSE 3001

CMD ["node", "dist/main.js"]
