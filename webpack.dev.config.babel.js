/**
 * webpack开发环境配置文件
 *
 * @author 曾文彬
 * @since 2017-5-4
 */

import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import baseConfig from './webpack.base.config';

export default () => webpackMerge(baseConfig(), {
  // 开发环境下的文件名和css、图片、font最后地址的基础地址
  output: {
    filename: '[name].js',
    publicPath: '/'
  },

  // 断点调试
  devtool: 'eval-source-map',

  // 内置的node服务器
  devServer: {
    inline: true,
    port: 6666
  },

  plugins: [
    // 开启热替换
    new webpack.HotModuleReplacementPlugin()
  ]
});
