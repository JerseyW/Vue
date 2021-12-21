<template>
  <div class="row">
    <div :key="item.id" class="card" v-for="(item) in info.userList">
      <a :href="item.html_url" target="_blank">
        <img :src="item.avatar_url" style='width: 100px' alt=""/>
      </a>
      <p class="card-text">{{item.login }}</p>
    </div>
    <h1 v-show="info.isFirst">欢迎使用！</h1>
    <h1 v-show="info.isLoading">加载中....</h1>
    <h1 v-show="info.errMsg">{{info.errMsg}}</h1>
  </div>

</template>

<script>
import pubSub from "pubsub-js";

export default {
  name: "List",
  data(){
    return{
      info:{
        isFirst:true,
        isLoading:false,
        errMsg:'',
        userList:[]
      }

    }
  },
  mounted() {
    //订阅消息
    this.token = pubSub.subscribe('sendMes',(_,data)=>{
        this.info = {...this.info,...data};
    }) ;
  },beforeDestroy() {
    pubSub.unsubscribe(this.token);
  }
}
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>