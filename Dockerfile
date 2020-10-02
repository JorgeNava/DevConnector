FROM node:13-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm i pm2

COPY . .

EXPOSE 3333

CMD ["npm", "start"]
