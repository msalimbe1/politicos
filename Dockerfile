FROM node:10

# Create app directory
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

COPY . .
RUN npm install
RUN npm run build

EXPOSE 5000
EXPOSE 443

CMD [ "node", "server/server.js" ]