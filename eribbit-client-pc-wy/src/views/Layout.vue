<template>
  <div>
    <!-- 顶部组件 -->
    <nav>顶部组件</nav>
    <!-- 头部组件 -->
    <header>头部组件</header>
    <!-- 内容容器 -->
    <div class="main">
      <!-- 二级路由 -->
      <RouterView/>
    </div>
    <!-- 底部组件 -->
    <footer>底部组件</footer>
  </div>
</template>

<script>
export default {
  name: 'Layout'
}
</script>

<style scoped lang="less">
</style>
