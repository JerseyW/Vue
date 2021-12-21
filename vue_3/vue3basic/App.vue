<template>
  <hello-world @showHelloMsg="showHelloMsg" mes="vue">
    <template v-slot:span>
      <span>dwdwwdw</span>
    </template>

  </hello-world>

</template>

<script>

import HelloWorld from "@/components/HelloWorld";
export default {
  name: 'App',
  components:{HelloWorld},
  setup(props,context){

    function showHelloMsg(value){
      alert(`你好啊，你触发了hello事件，我收到的参数是:${value}！`)
    }
    return {
      showHelloMsg
    }
  }
}
</script>

<style>

</style>
