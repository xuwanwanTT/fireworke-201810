const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: 'development',
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    port: 9000,
    overlay: {
      errors: true, //编译过程中如果有任何错误，都会显示到页面上
    }
  },
  entry: {
    js: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(gif||svg||png||jpg)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};
