let path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
};

module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production', // 构建时生产环境禁用eslint校验
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
  },
  css: {
    sourceMap: process.env.NODE_ENV === 'development'
  },
  productionSourceMap: false,
  configureWebpack: config => {

  }
}
