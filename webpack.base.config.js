/**
 * webpack基础配置文件
 *
 * @author 曾文彬
 * @since 2017-5-4
 */

import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextWebpackPlugin from 'extract-text-webpack-plugin';

export default () => ({
  // 入口文件
  entry: {
    'admin': path.join(__dirname, 'src', 'admin.js')
  },

  // 输出文件名和目录
  output: {
    path: path.resolve('dist')
  },

  // 设置模块编译器
  module: {
    rules: [{
      test: /\.jsx?$/i,
      exclude: /node_modules/,
      use: 'babel-loader'
    }, {
      test: /\.css$/i,
      use: ExtractTextWebpackPlugin.extract({
        use: 'css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5]',
        publicPath: 'assets/styles/'
      })
    }, {
      test: /\.(jpg|png)$/i,
      use: 'url-loader?limit=8192&name=/assets/images/[hash].[ext]'
    }, {
      test: /\.(ttf|woff|eot|svg)/i,
      use: 'file-loader?name=/assets/fonts/[hash].[ext]'
    }]
  },

  // webpack默认支持的引用文件后缀名
  resolve: {
    extensions: ['.js', '.jsx']
  },

  // 插件集
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ names: ['admin', 'runtime'] }),
    new ExtractTextWebpackPlugin('assets/styles/all.css'),
    new HtmlWebpackPlugin({
      title: '后台管理系统',
      template: 'index.html',
      inject: true
    })
  ]
});
