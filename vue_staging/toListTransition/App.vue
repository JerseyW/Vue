<template>
   <div id="root">
     <div class="todo-container">
       <div class="todo-wrap" >
         <Headers @addItem="addItem"></Headers>
         <list :list="list"></list>
         <Footers  ref="clear" :list="list"  ></Footers>
       </div>
     </div>
   </div>
</template>

<script>

import Headers from "@/components/Headers";
import Footers from "@/components/Footers";
import List from "@/components/List";
import  pubSub from "pubsub-js";

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
  methods:{
    addItem(data){
      this.list.push(data);
    },
    clearFinishItem(){
      for (let i = this.list.length - 1; i >= 0 ; i--) {
        if (this.list[i].done) this.list.splice(i,1);
      }
    }
  },
  watch:{
    list:{
      deep:true,
      handler(value){
        localStorage.setItem('list',JSON.stringify(value));
      }
    }
  },mounted() {
    //开始订阅
    this.token = pubSub.subscribe('clearFinishItem',this.clearFinishItem);
    //监听事件
     this.$bus.$on("deleteItem",(data,index)=>{

       this.list.splice(index,1);

     });

    this.$bus.$on("updateItem",(id,changeData) =>{

      this.list.forEach((value)=>{

         if (id === value.id){
           value.title = changeData;
         }
      })

    })
  },beforeDestroy() {
    pubSub.unsubscribe(this.token);
    this.$bus.off(['deleteItem','updateItem']);
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