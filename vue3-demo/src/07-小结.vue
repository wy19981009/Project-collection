<template>
  <div class="container">
    <div>坐标</div>
    <div>x:{{x}}</div>
    <div>y:{{y}}</div>
    <div>---------------------------</div>
    <div>{{count}} <button @click="add">累加1</button></div>
  </div>
</template>

<script>
import { onUnmounted, reactive, ref, toRefs } from 'vue'
import { onMounted } from 'vue'
export default {
  name: 'App',
  setup() {
    // 记录鼠标坐标
    const mouse = reactive({
      x: 0,
      y: 0
    })
    const move = e => {
      mouse.x = e.pageX
      mouse.y = e.pageY
    }
    // 监听事件
    onMounted(() => {
      document.addEventListener('mousemove', move)
    })
    onUnmounted(() => {
      document.removeEventListener('mousemove', move)
    })

    // 累加功能
    const count = ref(0)
    const add = () => {
      count.value++
    }
    return { ...toRefs(mouse), count, add }
  }
}
</script>

<style>

</style>