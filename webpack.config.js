let path = require('path');
let glob = require('glob');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

let entries = glob.sync('./src/components/*/*.js');
let entryObj = {}
entries.forEach(item => {
  entryObj[item.substring(17).replace('/index.js', '')] = item
})

module.exports = {
  mode: 'production',
  entry: entryObj,
  output: {
    filename: './components/[name].js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2'
  },
  optimization: {
    minimize: false // 不压缩
  },
  performance: {
    hints: false // 消除警告
  },
  module: { // 处理项目中的不同类型的模块。
    rules: [ // rules 各种规则
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.vue$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'vue-loader' // vue-loader 编译vue模块
      },
      {
        test: /\.(png|jpg|gif|jpeg)/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000
          }
        }]
      }
    ]
  },
  resolve: {
    // 引入路径是不用写对应的后缀名
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [
    new VueLoaderPlugin() // vue-loader插件开启
  ]
}
