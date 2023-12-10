import Vue from 'vue'
import Vuex from 'vuex'
import snackbarStore from './modules/snackbar-store'
import userStore from './modules/user-store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuthorized: false
  },
  getters: {
    checkAuthorized: state => state.isAuthorized
  },
  mutations: {
    setAuthorized(state, data) {
      state.isAuthorized = data
    }
  },
  actions: {
  },
  modules: {
    snackbarStore,
    userStore
  }
})
