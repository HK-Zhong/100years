import "@amap/amap-jsapi-types";

/**
 * 方便构造时间的工具函数
 * @returns Date 对象
 */
export function d(year: number, month: number, day: number) {
  return new Date(year, month, day);
}

/**
 * 方便构造经纬度的工具函数
 * @param lng 经度
 * @param lat 纬度
 * @returns AMap.LngLat 对象
 */
export function l(lng: number, lat: number) {
  return new AMap.LngLat(lng, lat);
}
