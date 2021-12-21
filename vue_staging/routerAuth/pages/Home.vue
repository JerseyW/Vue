<template>
  <div class="col-xs-6">
    <div class="panel">
      <div class="panel-body">
        <div>
          <h2>Home组件内容</h2>
          <div>
            <ul class="nav nav-tabs">
              <li>
                <router-link replace class="list-group-item" to="/home/news" active-class="active">News</router-link>

              </li>
              <li>
                <router-link replace class="list-group-item" to="/home/message" active-class="active">Messages</router-link>
              </li>
            </ul>
            <!--路由缓存:缓存News组件内容：路由切换News组件不会被销毁-->
<!--            <keep-alive include="News">
              <router-view></router-view>
            </keep-alive>-->
            <keep-alive :include='["News","Message"]'>
              <router-view></router-view>
            </keep-alive>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name:'Home',
    beforeDestroy() {
      console.log('不使用的路由组件会被销毁',this)
    }
	}
</script>