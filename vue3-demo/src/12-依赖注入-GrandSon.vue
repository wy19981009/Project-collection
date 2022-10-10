<template>
  <div class="contaier">
    <h3>孙组件</h3>
    <p>{{money}}</p>
  </div>
</template>

<script>
import { inject } from 'vue'
export default {
  setup() {
    // 接收祖先组件提供的数据
    const money = inject('money');
    return { money }
  }
}
</script>

<style>

</style>