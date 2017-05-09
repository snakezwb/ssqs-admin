/**
 * @name LeftNav.jsx
 * @description 左侧边栏容器组件
 * @author 曾文彬
 * @since 2017-5-8
 */

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Menu } from 'antd';
import { findNavBySubNavKey } from '../../actionCreators/nav';

export default class LeftNav extends Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const store = this.context.store;
    const { dispatch } = store;
    const { nav } = store.getState();

    return (
      <Menu
        theme="dark"
        style={{ width: '100%', height: '100%' }}
        mode='inline'
        defaultSelectedKeys={ ['product_list'] }
        defaultOpenKeys={ ['product'] }
        onSelect={ ({ key }) => dispatch(findNavBySubNavKey(key)) }>
        {
          nav.data.map((navItem, index) => {
            return (
              <Menu.SubMenu
                key={ navItem.key }
                title={ navItem.name }>
                {
                  navItem.subItems.map((subNavItem, idx) =>
                    <Menu.Item key={ subNavItem.key }>{ subNavItem.name }</Menu.Item>
                  )
                }
              </Menu.SubMenu>
            )
          })
        }
      </Menu>
    );
  }
}
