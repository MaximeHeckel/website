FROM node:5-slim

ADD . /
RUN npm install --unsafe-perm=true --no-optional

EXPOSE 8000

ENTRYPOINT ["/server", "-entry=./dist/index.html"]