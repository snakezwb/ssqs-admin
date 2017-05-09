/**
 * @name util.js
 * @description 工具方法
 * @author 曾文彬
 * @since 2017-5-9
 */

// 嵌套过深对象取得值
export const getObjNestDeepValueByKeys = (obj, keys) => {
  return keys.reduce((initValue, key) => {
    let result = initValue[key];

    return typeof result === 'function'
      ? result.call(initValue)
      : result != null
        ? result
        : {};
  }, obj);
};
