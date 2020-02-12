import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  
  // state: {
  //   loadedOffices: [
  //     { id: '1', name: 'Ksiegowosc', price: 100 },
  //     { id: '2', name: 'BMW', price: 80 },
  //     { id: '3', name: 'Volkswagen', price: 75 },
  //     { id: '4', name: 'Audi', price: 85 }
  //   ],
  //   user: {
  //     id: '624',
  //     favouriteOffices: ['2', '3']
  //   }
      
    
  // },

  state: {
    loadedOffices: [
    ],
    user: {
      id: '624',
      favouriteOffices: ['2', '3']
    }
  },

  mutations: {
    loadCompanies: state => {
      state.loadedOffices = [
            { id: '1', name: 'Ksiegowosc-test', price: 100 },
            { id: '2', name: 'BMW-test', price: 80 },
            { id: '3', name: 'Volkswagen-test', price: 75 },
            { id: '4', name: 'Audi-test', price: 85 }
          ];
          console.log('mutation loadCompanies executed succesfully');
    }
  },
  actions: {
    loadCompaniesAction: ({ commit }) => {
      commit('loadCompanies');
      console.log('mutation loadCompanies executed succesfully');
    
    }
  },

  getters: {

    loadedOffices (state) {
      return state.loadedOffices;
    }, //loadoffices

    loadedOffice (state) {

      return (officeId) => {

        return state.loadedOffices.find((office) => {
          return office.id === officeId
        }) //return state.loaded...
    
      } //return officeId

    }, //loadOffice

  }, //getters

  modules: {
  }, //modules
}) //vue store
