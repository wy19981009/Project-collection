// 定义分类相关的api接口函数

import request from '@/utils/request'

/**
 * 获取所有分类数据
 * @returns Promise
 */
export const findAllCategory = () => {
  return request('/home/category/head', 'get')
}
