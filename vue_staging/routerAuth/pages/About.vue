<template>
	<h2>我是About的内容</h2>
</template>

<script>
	export default {
		name:'About',
    beforeDestroy() {
      console.log('不使用的路由组件会被销毁',this)
    },
    //组件路由：当路由规则进入组件时触发
    beforeRouteEnter(to,from,next){
      console.log("当路由规则进入组件时触发")
        next()
    },
    //组件路由：当路由规则离开组件时触发
    beforeRouteLeave(to,from,next){
      console.log("当路由规则离开组件时触发")
      next()
    }
  }
</script>