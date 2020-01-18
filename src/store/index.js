import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedOffices: [
      { id: 1, name: 'Ksiegowosc', price: 100 },
      { id: 2, name: 'BMW', price: 80 },
      { id: 3, name: 'Volkswagen', price: 75 },
      { id: 4, name: 'Audi', price: 85 }
    ],
    user: {
      id: '624',
      favouriteOffices: ['2', '3']
    }
      
    
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    loadedOffices (state) {
      return state.loadedOffices;
    },
    loadedOffice (state) {
      return (officeId) => {
        return state.loadedOffices.find((office) => {
          return office.id === officeId
        })
      }
    }
  },
  modules: {
  }
})
