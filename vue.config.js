const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 代理
  devServer: {
    open: true,
    port: 8080,
    // 热更新
    hot: true,
    client: {
      // 关闭错误叠加层
      overlay: false
    },
    compress: true,
    proxy: {
      '/api': {
        target: 'https://test-brm.comein.cn',
        changeOrigin: true
      }
    }
  },
});
