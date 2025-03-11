#!/bin/bash

docker rm mongo
docker rm pass-back
docker rm frontend

docker network rm pass-net

