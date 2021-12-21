<template>
  <ul>
    <li>news001 <input type="text"/></li>
    <li>news002 <input type="text"/></li>
    <li>news003 <input type="text"/></li>
  </ul>
</template>

<script>
export default {
  name: "News",
  activated() {
      console.log('路由激活时调用')
  },
  deactivated() {
    console.log('路由失活时调用')
  }
}
</script>

<style scoped>

</style>