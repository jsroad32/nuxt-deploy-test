#!/usr/bin/env bash

# pm2 reload
docker exec pm2  sh -c "cd /app; pm2 reload all"
