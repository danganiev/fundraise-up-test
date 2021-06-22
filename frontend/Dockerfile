FROM node

# set working directory
WORKDIR /front

# add `/front/node_modules/.bin` to $PATH
ENV PATH /front/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install && npm cache clean --force

# add app
COPY . ./

# start app
CMD ["npm", "run", "serve"]
