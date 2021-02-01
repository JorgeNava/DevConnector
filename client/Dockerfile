FROM node:13-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm i pm2

EXPOSE 3000

COPY . .

CMD ["npm", "start"]


#---PRODUCTION---
#FROM node:alpine

#WORKDIR /app

#COPY package.json /app

#RUN yarn install && yarn cache clean

#COPY . /app

#CMD ["yarn", "run", "build"]