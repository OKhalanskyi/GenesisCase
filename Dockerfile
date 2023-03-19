FROM node:latest

WORKDIR /app

EXPOSE 4308

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm","run","dev"]