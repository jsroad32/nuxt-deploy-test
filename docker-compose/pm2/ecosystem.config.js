module.exports = {
  apps: [
    {
      name: 'frontend',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: '/app/node_modules/nuxt/bin/nuxt.js',
      args: 'start',

      // wait_ready: true, // ready 신호 대기
      // listen_timeout: 50000, // ready 이벤트 대기 시간(ms)
      // kill_timeout: 5000 //

      // script: 'npm',
      // args: 'run start',
      // env: {
      //   "PORT": 3000,
      //   "NODE_ENV": "development"
      // },
      // env_production: {
      //   "PORT": 3000,
      //   "NODE_ENV": "production",
      // }
    }
  ]
}