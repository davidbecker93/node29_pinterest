FROM node:16

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 8081

CMD npm start ["node","src/index.js"]