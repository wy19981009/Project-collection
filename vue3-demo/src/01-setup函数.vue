<template>
  <div class="container">
    <h1 @click="say()">{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'App',
  // 组合API的代码基本上都在这里
  setup() {
    console.log('setup', this)
    // 数据
    const msg = 'hi vue3'
    // 函数
    const say = () => {
      console.log(msg)
    }
    return { msg, say }
  }

}
</script>

<style>

</style>