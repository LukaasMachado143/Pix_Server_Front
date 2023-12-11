const state = {
  id: null,
  email: null,
  name: null,
  pixKey: null,
  phone: null,
  profileImageUrl: null,
  balance: null,
};

const mutations = {
  reset(state) {
    state.id = null
    state.email = null
    state.name = null
    state.pixKey = null
    state.phone = null
    state.profileImageUrl = null
    state.balance = null
  },
  set(state, data) {
    state.id = data.id
    state.email = data.email
    state.name = data.name
    state.pixKey = data.pixKey
    state.phone = data.phone
    state.profileImageUrl = data.profileImageUrl
    state.balance = data.balance
  },
  simpleData(state, data) {
    state.email = data.email
    state.name = data.name
    state.pixKey = data.pixKey
  },
  updateBalance(state, data) {
    state.balance = data
  }
};

const getters = {
  userData: state => state,
  id: state => state.id,
  balance: state => state.balance
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
};
