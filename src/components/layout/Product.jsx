/**
 * @name Product.jsx
 * @description 方案容器组件
 * @author 曾文彬
 * @since 2017-5-9
 */

import React, { Component, PropTypes } from 'react';
import { findProducts } from '../../actionCreators/product';
import ProductList from '../layer/ProductList';

export default class Product extends Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentWillMount() {
    const { dispatch } = this.context.store;
    dispatch(findProducts(5000));
  }

  render() {
    const { nav: { selectedKey }, product: { data } } = this.context.store.getState();
    const [ _, navSubKey ] = selectedKey.split('-');

    switch (navSubKey) {
      case 'product_list':
        return <ProductList products={ data } />
      default:
        return null;
    }
  }
}
