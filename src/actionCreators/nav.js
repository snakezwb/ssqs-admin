/**
 * @name nav.js
 * @description 导航action creator
 * @author 曾文彬
 * @since 2017-5-8
 */

// 获取所有的导航数据
export const findNavs = (navs) => ({
  type: 'FIND_NAVS',
  navs
});

// 获取具体导航数据
export const findNavBySubNavKey = (subNavKey) => ({
  type: 'FIND_APPOINT_NAV_KEY',
  subNavKey  
});
