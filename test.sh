#!/usr/bin/env bash

cd /home/ec2-user/build/docker-compose
docker-compose up -d

docker exec pm2  sh -c "cd /app; pm2 delete all"
docker exec pm2  sh -c "cd /app; pm2 start /app/docker-compose/pm2/ecosystem.config.js"
