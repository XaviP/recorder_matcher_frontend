import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inputs: []
  },
  actions: {
    loadInputs ({ commit }) {
      axios
        .get('http://localhost:8000/api/input/')
        .then(r => r.data)
        .then(inputs => {
          commit('SET_INPUTS', inputs)
        })
    }
  },
  mutations: {
    SET_INPUTS (state, inputs) {
      state.inputs = inputs
    },
    DELETE_INPUT (state, id) {
      var index = state.inputs.findIndex(input => input.id === id)
      state.inputs.splice(index, 1)
    }
  }
})
