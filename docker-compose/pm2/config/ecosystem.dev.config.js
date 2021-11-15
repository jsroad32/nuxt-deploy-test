module.exports = {
  apps: [
    {
      name: 'dev',
      exec_mode: 'cluster',
      instances: '1', // Or a number of instances
      // script: '/app/node_modules/nuxt/bin/nuxt.js',
      // script: './node_modules/nuxt/bin/nuxt.js',
      script: 'npm',
      args: 'start',
    }
  ]
}