import Vue from 'vue'
import Vuex from 'vuex'
import snackbarStore from './modules/snackbar-store'
import userStore from './modules/user-store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    snackbarStore,
    userStore
  }
})
