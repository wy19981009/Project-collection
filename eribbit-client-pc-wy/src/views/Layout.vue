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

export default {
  name: 'Layout',
  components: { AppNavbar, AppHeader, AppFooter }
}
</script>
<style scoped lang='less'>
.app-body {
  height: 600px;
}
</style>
