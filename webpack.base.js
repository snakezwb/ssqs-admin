/**
* webpack基础配置文件
*
* @author 曾文彬
* @since 2017-5-4
*/

import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ProgressBarWebpackPlugin from 'progress-bar-webpack-plugin';

export default ({
 entry: {
   app: path.join(__dirname, 'src', 'admin.js'),
   vender: ['react', 'react-dom', 'redux', 'react-redux', 'react-thunk', 'whatwg-fetch']
 },

 output: {
   path: path.resolve('dist')
 },

 module: {
   rules: [{
     test: /\.jsx?/,
     use: 'babel-loader',
     exclude: [/node_modules/]
   }, {
     test: /\.(ttf|woff|eot|svg)/,
     use: 'file-loader?name=assets/fonts/[hash].[ext]'
   }, {
     test: /\.jpg/,
     use: 'url-loader?limit=8192&name=assets/images/[hash].[ext]'
   }, {
     test: /\.json/,
     use: 'json-loader',
     exclude: [/node_modules/]
   }]
 },

 resolve: {
   extensions: ['.js', '.jsx']
 },

 plugins: [
   new webpack.optimize.CommonsChunkPlugin({
     name: 'vender',
     minChunks: (module) => module.context && module.context.indexOf('node_modules') !== -1
   }),

   new webpack.optimize.CommonsChunkPlugin({
     name: 'manifest',
     minChunks: Infinity
   }),

   new HtmlWebpackPlugin({
     template: 'index.html',
     title: '后台管理系统',
     inject: true
   }),

   new ProgressBarWebpackPlugin({
     clear: false
   })
 ]
});
