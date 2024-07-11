FROM node:latest

WORKDIR /app

# ENV key=value

COPY package.json yarn.lock  /app/

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]