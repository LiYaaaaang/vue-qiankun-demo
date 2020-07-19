import Vue from 'vue'
import Vuex from 'vuex'
import AppMsg from './appStore'
import AppList from './userApp'
import AppRouter from './appRouter'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    AppMsg,
    AppList,
    AppRouter
  }
})