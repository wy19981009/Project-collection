<template>
  <AppNavbar/>
  <header>
    <AppHeader/>
  </header>
  <main class="app-body">
    <!-- 二级路由 -->
    <router-view></router-view>
  </main>
    <footer>
      <AppFooter/>
    </footer>
  </template>
<script>
import AppNavbar from '@/components/app-navbar.vue'
import AppHeader from '../components/app-header.vue'
import AppFooter from '../components/app-footer.vue'
import { useStore } from 'vuex'

export default {
  name: 'Layout',
  components: { AppNavbar, AppHeader, AppFooter },
  // 获取下分类数据
  setup () {
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>
<style scoped lang='less'>
.app-body {
  height: 600px;
}
</style>
