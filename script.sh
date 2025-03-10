docker network create pass-net

cd backend

docker build -t backend-image .

cd ..

# docker run -d --name pass-mongo --network pass-net -p 27017:27017 mongo:latest

docker run -d --name mongo --network pass-net -p 27017:27017 mongo:latest

docker run --name pass-back --network pass-net -p 3000:3000 backend-image

# docker run --name pass-front --network pass-net -p 8080:80   -v "$(pwd)/frontend:/usr/share/nginx/html"   nginx:alpine

docker run --name frontend --network pass-net -p 8080:80   -v "$(pwd)/frontend:/usr/share/nginx/html"   nginx:alpine

docker rm pass-mongo
docker rm pass-front
docker rm pass-back
