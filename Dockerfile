FROM node:8-alpine

WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install
COPY . /app
CMD npm run start

EXPOSE 8080
