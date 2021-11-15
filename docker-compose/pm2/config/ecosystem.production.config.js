module.exports = {
  apps: [
    {
      name: 'dev',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: 'npm',
      args: 'start',
    }
  ]
}