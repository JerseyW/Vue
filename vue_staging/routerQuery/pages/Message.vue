<template>
  <ul>
    <li :key="message.id" v-for="message in messageList">
      <!--       字符串写法-->
<!--       <router-link :to="`/home/message/detail?id=${message.id}&title=${message.title}`" active-class="active">{{ message.title }}</router-link>-->
     <!--      对象写法 -->
      <router-link :to="{
        name:'detail',
        query:{
          id:message.id,
          title:message.title
        }
      }" active-class="active">{{ message.title }}</router-link>
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
  }

}
</script>

<style scoped>

</style>