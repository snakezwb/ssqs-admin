/**
 * @name App.jsx
 * @description 根组件
 * @author 曾文彬
 * @since 2017-5-8
 */

import React, { Component, PropTypes } from 'react';
import { Layout } from 'antd';
import LeftNav from './layout/LeftNav';
import Content from './layout/Content';

export default class App extends Component {
  static childContextTypes = {
    store: PropTypes.object.isRequired
  };

  getChildContext() {
    return { store: this.props.store };
  }

  render() {
    return (
      <Layout style={{ alignItems: 'stretch', height: '100%' }}>
        <Layout.Sider width={ 200 }>
          <LeftNav></LeftNav>
        </Layout.Sider>
        <Layout.Content>
          <Content />
        </Layout.Content>
      </Layout>
    );
  }
}
