#!/usr/bin/env bash

# docker compose 실행
sudo systemctl start docker
cd /home/ec2-user/build/docker-compose
docker-compose up -d

# pm2 시작
docker exec pm2  sh -c "cd /app; pm2 reload all"
#docker exec pm2  sh -c "cd /app; pm2 delete all"
#docker exec pm2  sh -c "cd /app; pm2 start /app/docker-compose/pm2/ecosystem.config.js"
