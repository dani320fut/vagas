#!/bin/bash

docker-compose up -d --build

docker exec -it salestime_api cp .env.example .env

docker exec -it salestime_api npm install

docker exec -it salestime_api adonis migration:run

docker exec -it salestime_api adonis seed