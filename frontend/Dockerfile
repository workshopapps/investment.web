FROM node:19-alpine

WORKDIR /app

COPY package.json .

RUN apk add --update python3 make g++\
   && rm -rf /var/cache/apk/*

RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]