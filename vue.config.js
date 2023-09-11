const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  chainWebpack: (config) => {
    // set svg-sprite-loader
    config.module.rules.delete('svg'); // 重点:删除默认配置中处理svg
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      });
  }
})
