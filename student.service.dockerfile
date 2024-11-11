FROM node:18-alpine

RUN mkdir /app

WORKDIR /app

RUN apk add --no-cache nodejs npm

COPY package*.json ./

COPY ./ /app

EXPOSE 3000

RUN npm install -f

CMD ["npm", "run", "start"]
