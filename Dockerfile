FROM node:alpine as build-process

WORKDIR app

COPY ./package-lock.json ./package-lock.json
COPY ./package.json ./package.json

RUN npm ci

COPY ./ ./

RUN npm run build

# nginx config
FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build-process /app/build /usr/share/nginx/html

RUN chown -R nginx:nginx /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]