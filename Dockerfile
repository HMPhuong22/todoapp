# Stage 1: Build app
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve với nginx
FROM nginx:stable-alpine

# Copy file cấu hình nginx nếu có (nếu không, dùng default)
# COPY nginx.conf /etc/nginx/nginx.conf

# Copy build React vào nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Mở cổng 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
