#!/bin/bash

docker run -d --name mongo --network pass-net --restart unless-stopped -p 27017:27017 mongo:latest
docker run -d --name pass-back --network pass-net --restart unless-stopped -p 3000:3000 backend-image
docker run -d --name frontend --network pass-net --restart unless-stopped -p 8080:80 -v "$(pwd)/frontend:/usr/share/nginx/html" nginx:stable-alpine-perl
