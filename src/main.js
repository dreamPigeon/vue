import Vue from 'vue'
//移动端淘宝适配
import 'lib-flexible'
import App from './App.vue'
import router from './router'
import Header from '@/components/Header/Header.vue'

//全局注册
Vue.component('Header',Header)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')                                   