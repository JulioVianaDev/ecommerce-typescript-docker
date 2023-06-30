FROM node:18

WORKDIR /app 

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3001

CMD [ "npx", "ts-node-dev", "--respawn", "--transpile-only", "--ignore-watch", "node_modules", "src" ]

