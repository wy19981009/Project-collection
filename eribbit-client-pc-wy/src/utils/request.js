// 1. 创建一个新的axios实例
// 2. 请求拦截器，如果有token进行头部携带
// 3. 响应拦截器：1. 剥离无效数据  2. 处理token失效
// 4. 导出一个函数，调用当前的axsio实例发请求，返回值promise

import axios from 'axios'
import store from '@/store'
import router from '@/router'

// 导出基准地址
export const baseUrl = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const instance = axios.create({
  baseUrl,
  timeout: 5000
})

instance.interceptors.request.use((config) => {
  // 拦截业务逻辑
  // 进行请求配置的修改
  // 如果在本地有token就在头部携带
  const { profile } = store.state.user
  if (profile.token) {
    config.headers.Authorization = `Bearer ${profile.token}`
  }
  return config
}, err => {
  return Promise.reject(err)
})

// 响应拦截器
instance.interceptors.response.use(res => res.data, err => {
  // 401状态码
  if (err.response && err.response.status === 401) {
    // 1.清空本地无效信息
    // 2.跳转到登录页面
    // 3.跳转需要传参
    store.commit('user/setUser', {})
    // 防止地址解析出问题encodeURIComponent
    const fullPath = encodeURIComponent(router.currentRouter.value.fullPath)
    router.push('/login?redirectUrl=' + fullPath)
  }
  return Promise.reject(err)
})

// 请求工具函数
export default (url, method, submitData) => {
  // 负责发请求:请求地址，请求方式，提交的数据
  return instance({
    url,
    method,
    [method.toLwerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
