// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import Message from "@/pages/Message";
import News from "@/pages/News";
import Details from "@/pages/Details";

//创建并暴露一个路由器
export default new VueRouter({
	routes:[
		{
			name:'about',
			path:'/',
			redirect:'about',
			component:About
		},
		{
			name:'home',
			path:'/home',
			component:Home,
			redirect:'/home/news',
			children:[{
					name:'message',
					path:'message',
				    component:Message,
				    children:[
						{
							name:'detail',
							path:'detail/:id/:title',
							component:Details,
							//路由props对象形式以props传递
							/*props:{
								id:1,
								title:2
							}*/
							//props的第二种写法 true将路由params参数以props形式传递给details组件
							  props:true,
							//props第三种写法
						/*	props($router){

								return {id:$router.params.id,title:$router.params.title}
							}*/
							/*props({params:{id,title}}){

								return {id,title}
							}*/
						 }
					]
				},
				{
					name:'news',
					path:'news',
					component:News
				}
			]
		}
	]
})
