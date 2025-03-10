#!/bin/bash

docker network create pass-net
cd backend
docker build -t backend-image .
cd ..
