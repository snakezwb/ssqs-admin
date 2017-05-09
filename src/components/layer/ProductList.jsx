/**
 * @name ProductList.jsx
 * @description 方案列表组件
 * @author 曾文彬
 * @since 2017-5-9
 */

import React, { Component, PropTypes } from 'react';
import { Table } from 'antd';

const columns = [{
  title: '方案号',
  dataIndex: 'productId',
  key: 'productId'
}, {
  title: '价格',
  dataIndex: 'price',
  key: 'price'
}, {
  title: '总量',
  dataIndex: 'quantityTotal',
  key: 'quantityTotal'
}, {
  title: '开始时间',
  dataIndex: 'openingTime',
  key: 'openingTime'
}, {
  title: '结束时间',
  dataIndex: 'closingTime',
  key: 'closingTime'
}, {
  title: '状态',
  dataIndex: 'status',
  key: 'status'
}];

export default class ProductList extends Component {
  static propTypes = {
    products: PropTypes.array
  };

  static defaultProps = {
    products: []
  };

  render() {
    const { products } = this.props;

    return (
      <Table
        columns={ columns }
        dataSource={ products } />
    );
  }
 }
