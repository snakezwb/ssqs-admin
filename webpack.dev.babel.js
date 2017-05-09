/**
* webpack开发环境配置文件
*
* @author 曾文彬
* @since 2017-5-4
*/

import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import WebpackDevServer from 'webpack-dev-server';
import ExtractTextWebpackPlugin from 'extract-text-webpack-plugin';
import baseConfig from './webpack.base';

export default () => webpackMerge(baseConfig, {
  output: {
    filename: '[name].js',
    publicPath: '/'
  },

  devtool: 'eval-source-map',

  module: {
    rules: [{
      test: /\.css/,
      use: ExtractTextWebpackPlugin.extract({
        use: 'css-loader'
      })
    }]
  },

  devServer: {
    hot: true,
    inline: true,
    contentBase: 'dist',
    stats: {
      colors: true
    },
    historyApiFallback: true,
    proxy: {
      '/products/list': {
        target: 'http://123.59.51.46:8084/',
        rewrite: true,
        changeOrigin: true
      }
    }
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new ExtractTextWebpackPlugin('assets/styles/all.css'),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('dev')
    })
  ]
});
