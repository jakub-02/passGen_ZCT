#!/bin/bash

docker stop mongo
docker stop pass-back
docker stop frontend

docker rm mongo
docker rm pass-back
docker rm frontend