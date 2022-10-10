<template>
  <div class="container">
    {{name}} <button @click="updateName">修改数据</button>
  </div>
</template>
<script>
import { reactive, toRef } from 'vue'
export default {
  name: 'App',
  setup() {
    // 1. 响应式数据对象
    const obj = reactive({
      name: 'ls',
      age: 10
    })
    console.log(obj)
    // 2. 模板中只需要使用name数据
    // 注意：从响应式数据对象中解构出的属性数据，不再是响应式数据
    // let { name } = obj 不能直接解构，出来的是一个普通数据
    const name = toRef(obj, 'name')
    // console.log(name)
    const updateName = () => {
      console.log('updateName')
      // toRef转换响应式数据包装成对象，value存放值的位置
      name.value = 'zs'
    }

    return { name, updateName }
  }
}
</script>
<style scoped lang="less">

</style>