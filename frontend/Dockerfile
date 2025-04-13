# Build
FROM node:22-slim AS builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Server NGINX
FROM nginx:stable-alpine AS production

RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
