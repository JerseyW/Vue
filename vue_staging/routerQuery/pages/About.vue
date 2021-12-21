<template>
	<h2>我是About的内容</h2>
</template>

<script>
	export default {
		name:'About',
    beforeDestroy() {
      console.log('不使用的路由组件会被销毁',this)
    }
  }
</script>