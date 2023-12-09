const state = {
  id: null,
  email: null,
  name: null,
  pixKey: null,
  profileImageUrl: null,
  balance: null,
};

const mutations = {
  reset(state) {
    state.id = null
    state.email = null
    state.name = null
    state.pixKey = null
    state.profileImageUrl = null
    state.balance = null
  },
  set(state, data) {
    state.id = data.id
    state.email = data.email
    state.name = data.name
    state.pixKey = data.pixKey
    state.profileImageUrl = data.profileImageUrl
    state.balance = data.balance
  }
};

const getters = {
  userData: state => state
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
};