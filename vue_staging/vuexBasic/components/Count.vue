<template>
	<div>
		<h1>当前求和为：{{sum}}</h1>
		<h1>当前求和放大为：{{bigSum}}</h1>
    <h3>我在{{school}}，学习{{subject}}</h3>
		<select v-model.number="n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="increment(n)">+</button>
		<button @click="decrement(n)">-</button>
		<button @click="incrementOdd(n)">当前求和为奇数再加</button>
		<button @click="incrementWait(n)">等一等再加</button>
	</div>
</template>

<script>
	import {mapState,mapGetters,mapActions,mapMutations} from "vuex";


  export default {
		name:'Count',
		data() {
			return {
				n:1,

			}
		},
		methods: {
		/*	increment(){
         this.$store.commit('ADD',this.n);
			},
			decrement(){
        this.$store.commit('SUBTRACT',this.n);
			},*/
      ...mapMutations({increment:'ADD',decrement:'SUBTRACT'}),
      ...mapActions({incrementOdd:'addOdd',incrementWait:'addWait'}),
		/*	incrementOdd(){
        this.$store.dispatch('addOdd',this.n);

			},
			incrementWait(){
        this.$store.dispatch('addWait',this.n);
			},*/
		},
    computed:{
      //靠程序员自己亲自去写计算属性
      /* sum(){
        return this.$store.state.sum
      },
      school(){
        return this.$store.state.school
      },
      subject(){
        return this.$store.state.subject
      }, */

      //借助mapState生成计算属性，从state中读取数据。（对象写法）
      ...mapState({sum:'sum',school:'school',subject:'subject'}),

      //借助mapState生成计算属性，从state中读取数据。（数组写法）--生成的计算属性名需要和state里属性名一致
      //...mapState(['sum','school','subject']),

      //...mapGetters({bigSum:'bigSum'}),
      ...mapGetters(['bigSum'])
    }
	}
</script>

<style lang="css">
	button{
		margin-left: 5px;
	}
</style>
