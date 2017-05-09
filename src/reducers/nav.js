/**
 * @name nav.js
 * @description nav reducer
 * @author 曾文彬
 * @since 2017-5-8
 */

 const defaultState = {
   selectedKey: 'product-product_list',
   data: [{
     key: 'product',
     name: '方案管理',
     subItems: [{
       key: 'product_list',
       name: '方案列表'
     }]
   }, {
     key: 'user',
     name: '用户管理',
     subItems: [{
       key: 'user_list',
       name: '用户列表'
     }]
   }, {
     key: 'good',
     name: '作品管理',
     subItems: [{
       key: 'good_list',
       name: '作品列表'
     }]
   }]
 };

 export default (state = defaultState, action) => {
   switch (action.type) {
     case 'FIND_NAVS':
       return Object.assign({}, state, {
         data: [ ...action.navs ]
       });

     case 'FIND_APPOINT_NAV_KEY':
       const selectedNav = state.data.find(nav =>
         nav.subItems.some(
           subItem => subItem.key === action.subNavKey));

       return Object.assign({}, state, {
         selectedKey: `${ selectedNav.key }-${ action.subNavKey }`
       });

     default:
       return state;
   }
 };
