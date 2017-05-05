/**
 * @name product.js
 * @description 方案Action
 * @author 曾文彬
 * @since 2017-5-5
 */

// 查找所有方案的action
export const findProducts = (url, pageSize = 10, currentPage = 1) => (dispatch) => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      pageSize,
      currentPage
    })
  })
  .then(data => {})
  .catch(error => console.error(error))
  .then(products => dispatch({
    type: 'FIND_PRODUCTS',
    products
  }));
};

// 根据方案id查找对应方案
export const findProductById = (productId) => ({
  type: 'FIND_APPOINT_PRODUCT',
  productId
});
