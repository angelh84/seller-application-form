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
      console.log('existing: ', existing)
      console.log('data: ', data)
      if (existing) {
        Object.assign(existing, data)
      } else {
        state.applications.push(data)
      }
    }
  },
  actions: {
    addApplication (context, data) {
      data.id = `${data.firstName.toLowerCase()}-${data.lastName.toLowerCase()}`
      context.commit('addApplication', data)
    }
  }
})
