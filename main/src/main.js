import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element'
import './assets/fonts/iconfont.css'
import './api/http'
import './assets/scss/reset.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#root')

/**
 * @name 验证登陆身份并启动微应用
 */
import microAppStart from './core/auth'
microAppStart()