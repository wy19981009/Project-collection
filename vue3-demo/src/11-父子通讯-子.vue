<template>
  <div class="container">
    <h1>子组件</h1>
    <p>{{money}}</p>
    <button @click="changeMoney">花50元</button>
    <hr />
  </div>
</template>

<script>
export default {
  name: "Son",
  // 接受父组件数据
  props: {
    money: {
      type: Number,
      default: 0
    }
  },
  setup(props, { emit }) {
    // 获取父组件数据
    console.log(props.money);
    // 向父组件传值
    const changeMoney = () => {
      emit("change-money", 50);
    };
    return { changeMoney };
  },
  components: { GrandSon }
}
</script>

<style>

</style>