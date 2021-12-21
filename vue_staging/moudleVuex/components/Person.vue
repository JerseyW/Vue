<template>
<div>
  <h3 style="color: red">count 组件总和为{{sum}}</h3>
   <h1>人员列表</h1>
   <input type="text" placeholder="请输入名字" v-model.trim="name"/>
   <button @click="add">添加</button>
   <button @click="addServer">服务器添加</button>
   <ul>
     <li :key="p.id" v-for="p in persons">{{ p.name }}</li>
   </ul>
</div>
</template>

<script>
import {mapActions, mapMutations, mapState} from 'vuex';
import  {nanoid} from "nanoid";

export default {
  name: "Person",
  data(){
    return{
      name:''
    }
  },
  computed:{
   /* persons(){
      return this.$store.state.personAbout.persons
    },*/
    ...mapState('personAbout',['persons']),
    ...mapState('countAbout',['sum'])
  },methods:{
    add(){
       const obj = {id:nanoid(),name:this.name};
       this.name = '';
       this.$store.commit('personAbout/ADD_PERSON',obj);
    },
    addServer(){
      this.$store.dispatch("personAbout/addFromServer")
    }
  }
}
</script>

<style scoped>

</style>