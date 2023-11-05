const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  base: './',
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
      ? '/' + process.env.CI_PROJECT_NAME + '/'
      : '/',
})
