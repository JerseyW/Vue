<template>
   <div id="root">
     <div class="todo-container">
       <div class="todo-wrap" >
         <Headers :list="list"></Headers>
         <list :list="list"></list>
         <Footers  ref="clear" :list="list" ></Footers>
       </div>
     </div>
   </div>
</template>

<script>

import Headers from "@/components/Headers";
import Footers from "@/components/Footers";
import List from "@/components/List";
const  itemlist = [
  {id: "001",title:"吃饭",done:true},
  {id: "002",title:"学习",done:true},
  {id: "003",title:"玩游戏",done:false},
  {id: "004",title:"睡觉",done:false}]

export default {

  name: "App",
  components: {Headers, Footers, List},
  data(){
    return {
      list:JSON.parse(localStorage.getItem('list')) || itemlist
    }
  },
  watch:{
    list:{
      deep:true,
      handler(value){
        localStorage.setItem('list',JSON.stringify(value));
      }
    }
  }
}
</script>

<style scoped>

body {
  background: #fff;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

</style>