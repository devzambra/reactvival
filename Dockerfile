FROM ubuntu:latest
USER root

WORKDIR /app

ADD ./ /app

ARG FIREBASE_TOKEN

RUN apt-get update
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_12.x  | bash -
RUN apt-get -y install nodejs
RUN npm i -g firebase-tools
RUN firebase deploy --token ${FIREBASE_TOKEN}