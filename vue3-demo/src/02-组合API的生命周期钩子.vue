<template>
  <div class="container">
    根组件
  </div>
</template>

<script>
import { onBeforeMount, onMounted } from 'vue'
export default {
  name: 'App',
  setup() {
    // 1.DOM渲染前的钩子
    onBeforeMount(() => {
      console.log('DOM渲染前的钩子', document.querySelector('.container'))
    })
    // 2.DOM渲染后的钩子
    onMounted(() => {
      console.log('DOM渲染后的钩子', document.querySelector('.container'))
    })
    // 可以定义多个相同的钩子实现不同的功能
    onMounted(() => {
      console.log('DOM渲染后的钩子2', document.querySelector('.container'))
    });
  }
}
</script>

<style>

</style>