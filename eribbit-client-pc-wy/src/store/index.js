import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

// 独立的三个模块
import cart from './modules/cart'
import user from './modules/user'
import category from './modules/category'

export default createStore({
  modules: {
    cart,
    user,
    category
  },
  // 配置vuex持久化
  plugins: [
    // 默认存储在localStorage
    createPersistedState({
      key: 'erabbit-client-pc-wy-store',
      paths: ['user', 'cart']
    })
  ]
})
