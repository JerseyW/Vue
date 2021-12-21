<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input v-model.trim="keyWord" @keyup="search" type="text" placeholder="enter the name you search"/>&nbsp;<button>Search</button>
    </div>
  </section>
</template>

<script>
import  axios from "axios";
import pubSub from "pubsub-js";

export default {
  name: "Search",
  data(){
    return {
      keyWord:'',
      cancel:null
    }
  },methods:{
    search(){
      pubSub.publish('sendMes', {isFirst:false, isLoading: true});
      axios.request({
        method: "GET",
        //代理
        url: `http://localhost:8080/api/search/users?q=${this.keyWord}`,
        cancelToken :  new axios.CancelToken((c)=>{
          this.cancel = c;
        })
      }).then(response => {
        pubSub.publish('sendMes', {isLoading: false,userList:response.data.items});
        this.cancel = null;
      },e=>{
        pubSub.publish('sendMes', { isLoading: false,errMsg: e });
        this.cancel = null;
      })
    }
  }
}
</script>

<style scoped>

</style>