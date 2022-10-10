<template>
  <div class="container">
    <h1>父组件</h1>
    <p>{{money}}</p>
    <hr />
    <Son></Son>
  </div>
</template>

<script>
import { provide } from 'vue';
import Son from "./Son.vue";
export default {
  name: "App",
  components: { Son },
  setup() {
    const money = 100
    provide('money', money)
    return { money }
  }
}
</script>

<style>

</style>