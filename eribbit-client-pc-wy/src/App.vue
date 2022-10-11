<template>
  <div class="container">
    <button @click='fn'>测试request工具函数</button>
  </div>
</template>

<script>
import request from '@/utils/request'
export default {
  name: 'App',
  setup () {
    const fn = () => {
      request('/member/profile', 'get')
    }
    return { fn }
  }
}
</script>
