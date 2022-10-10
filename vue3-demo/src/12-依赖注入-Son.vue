<template>
  <div class="container">
    <h2>子组件</h2>
    <p>{{money}}</p>
    <hr>
    <GrandSon></GrandSon>
  </div>
</template>

<script>
import { inject } from 'vue';
import GrandSon from './GrandSon.vue';
export default {
  components: { GrandSon },
  setup() {
    // 接收祖先组件提供的数据
    const money = inject('money');
    return { money }
  }
}
</script>

<style>

</style>