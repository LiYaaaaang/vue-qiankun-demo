import Vue from 'vue'
import Vuex from 'vuex'
import UserApp from './userApp'
import UserInfo from './userInfo'
import AppMsg from './appStore'
import AppMenu from './appMenu'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    UserApp,
    UserInfo,
    AppMsg,
    AppMenu
  }
})