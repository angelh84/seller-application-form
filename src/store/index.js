import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    applications: []
  },
  mutations: {
    addApplication (state, data) {
      const existing = state.applications.find(app => app.id === data.id)
      if (existing) {
        Object.assign(existing, data)
      } else {
        state.applications.push(data)
      }
    }
  },
  actions: {
    addApplication (context, data) {
      context.commit('addApplication', data)
    }
  }
})
