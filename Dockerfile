FROM node:18-alpine3.17

WORKDIR /app

EXPOSE 3000

RUN corepack prepare yarn@3.5.1 --activate

COPY ./package.json .
COPY ./yarn.lock .

RUN yarn

COPY ./ ./

CMD yarn start