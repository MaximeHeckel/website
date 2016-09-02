FROM node:5-slim

ADD . /

RUN npm install --unsafe-perm=true --no-optional
RUN npm run build:frontend

EXPOSE 8000

ENTRYPOINT ["/server", "-entry=./index.html", "-static=./"]