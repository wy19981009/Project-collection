<template>
  <div class="container">
    <h1>父组件</h1>
    <p>{{money}}</p>
    <hr />
    <Son :money="money" @change-money="updateMoney"></Son>
  </div>
</template>

<script>
import Son from "./Son.vue";
import { ref } from 'vue'
export default {
  name: "App",
  components: { Son },
  setup() {
    const money = ref(100)
    const updateMoney = (newMoney) => {
      money.value = newMoney
    }
    return { money, updateMoney }
  }
}
</script>

<style>

</style>