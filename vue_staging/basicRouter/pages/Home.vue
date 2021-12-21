<template>
	<h2>我是Home的内容</h2>
</template>

<script>
	export default {
		name:'Home',
    beforeDestroy() {
      console.log('不使用的路由组件会被销毁',this)
    }
	}
</script>