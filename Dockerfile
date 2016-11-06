FROM alpine:latest

ADD dist ./app/dist
COPY server index.html ./app/
WORKDIR /app
RUN chmod +x server

EXPOSE 8000

ENTRYPOINT ["./server", "-entry=./index.html", "-static=./"]