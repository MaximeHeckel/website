FROM alpine:latest

ADD . /

EXPOSE 8000

ENTRYPOINT ["/server", "-entry=./dist/index.html"]