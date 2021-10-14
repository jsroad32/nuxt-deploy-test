FROM keymetrics/pm2:14-alpine

# 외부 접근 허용
ENV HOST 0.0.0.0

# 실행 상태 유지
CMD tail -f /dev/null

# pm2 실행
#CMD ["pm2-runtime", "start", "./docker-compose/pm2/ecosystem.config.js", "--env", "production"]

# pm2 start /app/docker-compose/pm2/ecosystem.config.js
# pm2 start ecosystem.config.js
# docker exec pm2 pm2 start /app/docker-compose/pm2/ecosystem.config.js
# docker exec pm2  sh -c "cd /app; npm run dev"
# docker exec pm2  sh -c "cd /app; pm2 start /app/docker-compose/pm2/ecosystem.config.js"