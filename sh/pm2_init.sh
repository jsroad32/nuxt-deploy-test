#!/usr/bin/env bash

# docker compose 실행
sudo systemctl start docker
cd /home/app/build/docker-compose
docker-compose up -d

# build
docker exec pm2  sh -c "cd /app; npm install"
docker exec pm2  sh -c "cd /app; npm run build"

# pm2 시작
#docker exec pm2  sh -c "cd /app; pm2 delete all"
docker exec pm2  sh -c "cd /app; pm2 start ./docker-compose/pm2/config/ecosystem.dev.config.js"
