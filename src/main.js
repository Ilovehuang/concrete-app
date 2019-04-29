import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
import App from './App.vue'
import 'lib-flexible'
import treat from './components/TreatyManager.vue'
Vue.config.productionTip = false
Vue.use(VueRouter)

import '../static/css/reset.css';

const contract = { template: '<div>Contract</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/product', component: treat },
  { path: '/contract', component: contract }
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')