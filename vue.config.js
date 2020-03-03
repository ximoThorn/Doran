let path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
};
console.log(process.argv, 'process.argv');
module.exports = {
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
