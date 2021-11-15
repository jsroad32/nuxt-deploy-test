module.exports = {
  apps: [
    {
      name: 'dev',
      exec_mode: 'cluster',
      instances: '1', // 클러스터 모드 사용 시 생성할 인스턴스 수
      // script: '/app/node_modules/nuxt/bin/nuxt.js',
      // script: './node_modules/nuxt/bin/nuxt.js',
      script: 'npm',
      args: 'start',
      watch: true, // 파일이 변경되었을 때 재시작 할지 선택
    }
  ]
}