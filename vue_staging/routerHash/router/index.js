// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import Message from "@/pages/Message";
import News from "@/pages/News";
import Details from "@/pages/Details";

//创建并暴露一个路由器
//配置路由权限
const router = new VueRouter({
	mode:"history",
	routes:[
		{
			name:'about',
			path:'/',
			redirect:'/about',
			component:About,
			meta:{title:'about'}
		},
		{
			name:'home',
			path:'/home',
			component:Home,
			redirect:'/home/news',
			meta:{title:'home'},
			children:[{
					name:'message',
					path:'message',
				    component:Message,
				    meta:{isAuth:true,title:'message'},
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
					],
				   //独享路由守卫:没有后置路由守卫
					/*beforeEnter(to,from,next){
						if (to.meta.isAuth) { //需要权限校验
							if (localStorage.getItem('school') !== 'beijing') {
								alert("没有权限");
								next({path: '/about'});
								return
							}
						}
						next();
					}*/
				},
				{
					name:'news',
					path:'news',
					component:News,
					meta:{title:'news'},
				}
			]
		}
	]
});
//配置路由权限:全局前置路由守卫：1 初始化被调用 2每次路由切换之前进行回调
/* router.beforeEach((to, from, next)=>{

	 if (to.meta.isAuth){ //需要权限校验
		 if (localStorage.getItem('school') !== 'beijing'){
			 alert("没有权限");
			 next({path:'/about'});
			 return
		 }
	 }
	 next();

});*/
//全局后置路由守卫: 后置路由守卫：1 初始化被调用 2每次路由切换之后进行回调:不常用
/*router.afterEach((to, from)=>{
	document.title = to.meta.title || 'about';
})*/

export  default  router;
