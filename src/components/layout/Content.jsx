/**
 * @name Content.jsx
 * @description 内容容器组件
 * @author 曾文彬
 * @since 2017-5-8
 */

import React, { Component, PropTypes } from 'react';
import Product from './Product';
import { getObjNestDeepValueByKeys } from '../../utils/util';

export default class Content extends Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const store = this.context.store;
    const state = getObjNestDeepValueByKeys(store, ['getState', 'nav']);
    const [ navParentKey ] = state.selectedKey.split('-');

    switch (navParentKey) {
      case 'product':
        return <Product />
      default:
        return null;
    }
  }
}
