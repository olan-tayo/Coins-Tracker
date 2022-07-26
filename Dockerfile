# Naively Simple Node Dockerfile

FROM node:alpine

RUN mkdir -p /home/app/ && chown -R node:node /home/app
WORKDIR /home/app
COPY --chown=node:node . .

USER node

RUN npm install

# start app
RUN npm run build

EXPOSE 3000
CMD [ "npm", "start" ]
