/**
 * @name product.js
 * @description product reducer
 * @author 曾文彬
 * @since 2017-5-5
 */

export default (state = {}, action) => {
  switch (action.type) {

    // 初始化所有的product
    case 'FIND_PRODUCTS':
      return Object.assign({}, state, {
        data: [ ...action.products ]
      });

    // 根据id得到具体product
    case 'FIND_APPOINT_PRODUCT':
      return Object.assign({}, state, {
        selectedProduct: state.data.find(
          product => product.productId === action.productId)
      });

    // default
    default:
      return state;
  }
};
