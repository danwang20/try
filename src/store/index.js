import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isHide: false
  },
  getters: {
  },
  mutations: {
    changeHide(state,params) {
      state.isHide = params
    }
  },
  actions: {
  },
  modules: {
  }
})
