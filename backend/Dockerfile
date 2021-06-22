FROM node
# RUN apk add --no-cache bash

COPY package*.json /back/

COPY . /back
ENV PATH /back/node_modules/.bin:$PATH

WORKDIR /back/
RUN npm install && npm cache clean --force