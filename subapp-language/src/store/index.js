import Vue from 'vue'
import Vuex from 'vuex'
import AppMsg from './appStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    AppMsg
  }
})