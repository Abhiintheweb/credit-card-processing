FROM node:16.13.0

WORKDIR /src
copy ./ ./

RUN yarn

ENV HOST=0.0.0.0
CMD ["yarn",  "start"]

