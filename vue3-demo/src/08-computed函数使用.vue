<template>
  <div class="container">
    <div>今年：{{age}}岁</div>
    <div>后年：{{newAge}}岁</div>
    <input type="text" v-model="age">
  </div>
</template>

<script>
import { computed, ref } from 'vue'
export default {
  name: 'App ',
  setup() {
    const age = ref(24)
    // const newAge = computed(() => {
    //   return age.value + 2
    // })
    const newAge = computed({
      get() {
        return parseInt(age.value) + 2
      },
      set(value) {
        console.log(value)
      }
    })

    return { age, newAge }
  }
}
</script>

<style>

</style>