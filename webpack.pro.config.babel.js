/**
 * webpack生产环境配置文件
 *
 * @author 曾文彬
 * @since 2017-5-4
 */

import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import baseConfig from './webpack.base.config';
export default () => webpackMerge(baseConfig(), {
  output: {
    filename: '[name].[chunkhash].js',
    publicPath: './'
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
});
