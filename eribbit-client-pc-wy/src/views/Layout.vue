<template>
  <AppNavbar/>
  <header>
    <AppHeader/>
  </header>
  <main>
    <!-- 二级路由 -->
    <router-view></router-view>
  </main>
    <footer>底部</footer>
  </template>
<script>
import AppNavbar from '@/components/app-navbar.vue'
import AppHeader from '../components/app-header.vue'

export default {
  name: 'Layout',
  components: { AppNavbar, AppHeader }
}
</script>
<style scoped lang='less'></style>
