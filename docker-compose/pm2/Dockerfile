FROM arm64v8/node:14

# 외부 접근 허용
ENV HOST 0.0.0.0

# pm2 설치
RUN npm install pm2 -g

# 실행 상태 유지
CMD tail -f /dev/null
