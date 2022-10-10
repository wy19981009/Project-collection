<template>
  <div class="container">
    <div>{{name}}</div>
    <div>{{age}}</div>
    <button @click="updataName">修改数据</button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'App',
  setup() {
    const name = ref('ls')
    const age = ref(18)
    const updataName = () => {
      name.value = 'zs'
    }
    // const data = ref(null)
    // setTimeout(() => {
    //   data.value = res.data
    // })
    return { name, age, updataName }
  }
}
</script>

<style>

</style>