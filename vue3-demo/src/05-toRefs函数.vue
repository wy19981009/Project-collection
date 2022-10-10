<template>
  <div class="container">
    <div>{{name}}</div>
    <div>{{age}}</div>
    <button @click="updataName">修改数据</button>
  </div>
</template>
<script>
import { reactive, toRef, toRefs } from 'vue'
export default {
  name: 'App',
  setup() {
    // 1. 响应式数据对象
    const obj = reactive({
      name: 'ls',
      age: 10
    })
    // 导致数据不是响应式数据
    // console.log(obj)
    // const { name, age } = obj
    // console.log(name, age)
    // const obj2 = { ...obj }
    // console.log(obj2)

    const obj3 = toRefs(obj)
    console.log(obj3)
    const updataName = () => {
      // obj3.name.value = 'zs'
      obj.name = 'zs'
    }


    return { ...obj3, updataName }
  }
}
</script>
<style scoped lang="less">

</style>