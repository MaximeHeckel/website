FROM mhart/alpine-node:latest

RUN npm install danger
ADD dist ./app/dist
COPY dangerfile.js ./app/
COPY server index.html ./app/
WORKDIR /app
RUN apk --update add ca-certificates && chmod +x server

EXPOSE 8000

ENTRYPOINT ["./server", "-entry=./index.html", "-static=./"]