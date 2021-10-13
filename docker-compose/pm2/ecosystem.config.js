module.exports = {
  apps: [
    {
      name: 'frontend',
      exec_mode: 'cluster',
      instances: '1', // Or a number of instances
      script: '/app/node_modules/nuxt/bin/nuxt.js',
      args: 'start'
    }
  ]
}