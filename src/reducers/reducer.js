/**
 * @name reducer.js
 * @description reducer入口文件
 * @author 曾文彬
 * @since 2017-5-5
 */

import { combineReducers } from 'redux';
import product from './product';
import nav from './nav';

export default combineReducers({
  product,
  nav
});
