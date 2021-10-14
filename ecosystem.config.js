module.exports = {
  apps: [
    {
      name: 'frontend',
      exec_mode: 'cluster',
      instances: '1', // Or a number of instances
      script: '/app/node_modules/nuxt/bin/nuxt.js',
      args: 'start',
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