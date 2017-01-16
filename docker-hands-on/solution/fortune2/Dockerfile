FROM ubuntu:latest

RUN apt-get update
RUN apt-get install -y cowsay fortune-mod

ENV PATH $PATH:/usr/games
VOLUME ["/usr/share/cowsay/cows/"]

CMD fortune | cowsay
