FROM keymetrics/pm2:14-alpine

# 외부 접근 허용
ENV HOST 0.0.0.0

# 실행 상태 유지
CMD tail -f /dev/null

# pm2 실행
#CMD ["pm2-runtime", "start", "./docker-compose/pm2/ecosystem.config.js", "--env", "production"]