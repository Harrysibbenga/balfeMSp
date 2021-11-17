const admin = {
  namespaced: true,
  state: {
    currentUser: null,
    userProfile: {},
  },
  mutations: {
    setCurrentUser(state, val) {
      state.currentUser = val;
    },
  },
  actions: {
    clearData({ commit }) {
      commit("setCurrentUser", null);
    },
  },
  getters: {
    currentUser(state) {
      return state.currentUser;
    },
  },
};

export default admin;
