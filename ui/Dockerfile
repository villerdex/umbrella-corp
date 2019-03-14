FROM node

WORKDIR /app/ui
COPY package.json /app/ui

RUN npm install

EXPOSE 8080
CMD ["npm", "start"]