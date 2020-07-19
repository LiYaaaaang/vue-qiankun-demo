import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/login'
}, {
  path: '/login',
  name: 'Login',
  component: () => import('../views/Login.vue')
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


// 路由导航守卫
router.beforeEach((to, from, next) => {
  // 在路由跳转的时候判断是否有token或者token是否还有效
  if (to.path === '/login') {
    next()
  } else {
    const token = sessionStorage.getItem('token')
    if (!token) {
      console.log("没有token走这里")
      next('/login')
    } else {
      console.log("有token走这里")
      next()
    }
  }
})

export default router