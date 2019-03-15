FROM node:8.15.1-alpine

WORKDIR /ui
COPY /main /ui
COPY main/package.json /ui

RUN yarn install

EXPOSE 8080
CMD ["npm", "start"]