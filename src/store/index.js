import { createStore } from 'vuex'

export default createStore({
  state: {
    nav:[]
  },
  mutations: {
    changeNav(state, data){
      state.nav = data
    }
  },
  actions: {
    setNav({commit},data){
      commit('changeNav', data)
    }
  },
  modules: {
  }
})
