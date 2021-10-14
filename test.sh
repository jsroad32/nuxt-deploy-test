#!/usr/bin/env bash

export WORK_HOME=/home/ec2-user/build

cd WORK_HOME/docker-compose
docker-compose up -d

docker exec pm2  sh -c "cd /app; pm2 start /app/docker-compose/pm2/ecosystem.config.js"
