/**
 @author: Jersey
 @create: 2021-12-14 10:42
 @version: V1.0
 @slogan: 业精于勤,荒于嬉;行成于思,毁于随。
 @description:
 */
import Vue from "vue";
import App from './App'
Vue.config.productionTip = false
new Vue({
    render: h=>h(App),
    beforeCreate() {
        Vue.prototype.$bus = this;//安装全局事件总线
    }
}).$mount("#app")