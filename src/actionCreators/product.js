/**
 * @name product.js
 * @description 方案action creator
 * @author 曾文彬
 * @since 2017-5-5
 */

// 查找所有方案
export const findProducts = (pageSize = 10, currentPage = 1) => (dispatch) => {
  fetch(`/products/list`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      pageSize,
      currentPage
    })
  })
  .then(data => data.json())
  .catch(error => console.error(error))
  .then(product => {
    dispatch({
      type: 'FIND_PRODUCTS',
      products: product.data.products
    })
  });
};

// 根据方案id查找对应方案
export const findProductById = (productId) => ({
  type: 'FIND_APPOINT_PRODUCT',
  productId
});
