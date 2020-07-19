import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'

Vue.use(VueRouter)

const frontRule = {
  path: '/front',
  component: () => import('../views/Home.vue')
}
const backRule = {
  path: '/back',
  component: () => import('../views/About.vue')
}
// 字符串和路由规则的映射关系
const ruleMapping = {
  'front': frontRule,
  'back': backRule
}

// 路由组
const routes = [{
  path: '*',
  name: 'NotFound',
  component: () => import('../views/NotFound.vue')
}]

export function initDynamicRoutes() {
  // 根据二级权限,对路由规则进行动态添加
  const rightList = store.getters.userApp
  const currentRightList = rightList[0]
  currentRightList.children.forEach(item => {
    console.log(item)
    /** item为子应用下的一级菜单，用正则匹配出对应的映射 */
    let matchUrl = item.url.match("\\w+$")[0]
    const temp = ruleMapping[matchUrl]
    temp.meta = item.rights
    routes.push(temp)
    console.log(routes)
  })
}

export default routes