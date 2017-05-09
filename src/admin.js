/**
 * @name admin.js
 * @description 入口文件
 * @author 曾文彬
 * @since 2017-5-5
 */

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store/store';
import 'whatwg-fetch';
import 'antd/dist/antd.css';

const render = () => {
  ReactDom.render(
    <App store={ store } />,
    document.getElementById('ssqs-admin')
  );
};

render();

store.subscribe(() => render());
