import Vue from 'vue'
import Vuex from 'vuex'
import customPage from './custom-page'

Vue.use(Vuex)
/**
 * 状态管理
 */
const store = new Vuex.Store({
  modules: {
    customPage
  }
})

export default store