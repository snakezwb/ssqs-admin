/**
 * @name store.js
 * @description 集中管理应用共享状态
 * @author 曾文彬
 * @since 2017-5-5
 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/reducer';

export default createStore(reducer, applyMiddleware(thunk));
