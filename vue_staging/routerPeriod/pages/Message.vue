<template>
  <ul>
    <li :key="message.id" v-for="message in messageList">
      <!--       字符串写法-->
<!--  <router-link replace :to="`/home/message/detail/${message.id}/${message.title}`"  active-class="active">{{ message.title }}</router-link>-->
     <!--      对象写法 -->
      <router-link :to="{
        name:'detail',
        params:{
          id:message.id,
          title:message.title
        }
      }" active-class="active">{{ message.title }}</router-link>
      <button @click="pushShow(message)">push 查看</button>
      <button @click="replaceShow(message)">replace 查看</button>
    </li>
    <router-view></router-view>
  </ul>
</template>

<script>
export default {
  name: "Message",
  data(){
    return {
      messageList:[
        {id:'001',title:"消息001"},
        {id:'002',title:"消息002"},
        {id:'003',title:"消息003"},
      ]
    }
  },methods:{
    pushShow(m){
        this.$router.push({
             name:"detail",
             params:{
                 id: m.id,
                 title:m.title

            }
        })
    },
    replaceShow(m){
      this.$router.replace({
        name:"detail",
        params:{
          id: m.id,
          title:m.title

        }
      })
    }
  }

}
</script>

<style scoped>

</style>