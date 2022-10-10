<template>
  <div class="container">
    {{ $store.state.user.profile.account }}
    <button @click="$store.commit('user/setUser', {account: 'zs'})">设置用户信息</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  setup () {}
}
</script>
