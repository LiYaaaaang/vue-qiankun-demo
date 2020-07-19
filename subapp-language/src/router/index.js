import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'

Vue.use(VueRouter)

const javaRule = {
  path: '/java',
  component: () => import('../views/Home.vue')
}
const jsRule = {
  path: '/javascript',
  component: () => import('../views/About.vue')
}
// 字符串和路由规则的映射关系
const ruleMapping = {
  'java': javaRule,
  'javascript': jsRule
}
// 路由容器
const routes = [{
  path: '*',
  name: 'NotFound',
  component: () => import('../views/NotFound.vue')
}]

// const routes = [{
//     path: '/java',
//     name: 'Home',
//     component: () => import('../views/Home.vue')
//   },
//   {
//     path: '/javascript',
//     name: 'About',
//     component: () => import('../views/About.vue')
//   },
//   {
//     path: '*',
//     name: 'NotFound',
//     component: () => import('../views/NotFound.vue')
//   }
// ]

export function initDynamicRoutes() {
  // 根据二级权限,对路由规则进行动态添加
  const rightList = store.getters.userApp
  const currentRightList = rightList[1]
  console.log(currentRightList)
  currentRightList.children.forEach(item => {
    /** item为子应用下的一级菜单，用正则匹配出对应的映射 */
    let matchUrl = item.url.match("\\w+$")[0]
    const temp = ruleMapping[matchUrl]
    routes.push(temp)
    console.log(routes)
  })
}

export default routes