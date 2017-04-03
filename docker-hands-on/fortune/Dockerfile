FROM ubuntu:latest

RUN apt-get update
RUN apt-get install -y cowsay
RUN mv /usr/share/cowsay/cows/default.cow /usr/share/cowsay/cows/orig-default.cow
COPY docker.cow /usr/share/cowsay/cows/
RUN ln -sv /usr/share/cowsay/cows/docker.cow /usr/share/cowsay/cows/default.cow

RUN rm -rf /var/lib/apt/lists/*
ENV PATH $PATH:/usr/games

CMD cowsay
