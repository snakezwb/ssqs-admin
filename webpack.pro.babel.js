/**
* webpack生产环境配置文件
*
* @author 曾文彬
* @since 2017-5-4
*/

import webpack from 'webpack';
import ExtractTextWebpackPlugin from 'extract-text-webpack-plugin';
import webpackMerge from 'webpack-merge';
import baseConfig from './webpack.base';

export default () =>
  webpackMerge(baseConfig, {
    output: {
      filename: '[name].[chunkhash].js'
    },

  module: {
    rules: [{
      test: /\.css/,
      use: ExtractTextWebpackPlugin.extract({
        use: 'css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5]',
        publicPath: '../../'
      })
    }]
  },

  plugins: [
    new ExtractTextWebpackPlugin('assets/styles/all.css'),

    new webpack.DefinePlugin({
     'process.env.NODE_ENV': JSON.stringify('pro')
    }),

    // new webpack.optimize.UglifyJsPlugin({
    //  compress: {
    //    warnings: false
    //  }
    // })
  ]
});
