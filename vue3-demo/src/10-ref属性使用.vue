<template>
  <div class="container">
    <!-- <div ref="box">我是box</div>
    <ul>
      <li v-for="i in 4" :key="i">{{i}}</li>
    </ul> -->
    <div ref="dom">我是box</div>
    <ul>
      <li v-for="i in 4" :key="i" :ref="setDom">第{{i}}</li>
    </ul>
  </div>
</template>
<script>
import { onMounted, ref } from 'vue'
export default {
  name: 'App',
  setup() {
    const dom = ref(null)
    onMounted(() => {
      console.log(dom.value)
    })

    // 获取v-for遍历的元素
    const domList = []
    const setDom = (el) => {
      domList.push(el)
    }
    console.log(domList)
    return { dom, setDom }
  }
}
</script>