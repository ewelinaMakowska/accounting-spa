import Vue from 'vue'
import Vuex from 'vuex'

import CompaniesService from '@/services/CompaniesService.js' // eslint-disable-line no-unused-vars

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
    count: null,
    user: {
      id: '624',
      favouriteOffices: ['2', '3']
    }
  },

  mutations: {
    loadCompanies: (state, data) => {
      // state.loadedOffices = [
      //       { id: '1', name: 'Ksiegowosc-test', price: 100 },
      //       { id: '2', name: 'BMW-test', price: 80 },
      //       { id: '3', name: 'Volkswagen-test', price: 75 },
      //       { id: '4', name: 'Audi-test', price: 85 }
      //     ];

      //state.loadedOffices = 

  //     try {
  //       state.loadedOffices = CompaniesService.getAllCompanies();
  //       const testCompanies = CompaniesService.getAllCompanies();
  //       console.log(testCompanies);
  //      console.log('loaded from db succesfully');
  //  }
  //  catch (err) {
  //      console.log('store didnt manage to load companies from db ')
  //      console.log(err)
  //  }
  //         console.log('mutation loadCompanies executed succesfully');
  //   }

      state.loadedOffices = data.rows;
      state.count = data.count;
    }

  },
  actions: {
    async loadCompaniesAction ({ commit })  {
      const result = await CompaniesService.getAllCompanies();
      commit('loadCompanies', result.data);
      console.log('action loadCompanies executed succesfully');   
    },
    async loadOnePageData ({ commit })  {
      const result = await CompaniesService.getLimited();
      commit('loadCompanies', result.data);
      console.log('action loadOnePageData executed succesfully');  
  }},

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

    countValue (state) {
      return state.count;
    }

  }, //getters

  modules: {
  }, //modules

}) //vue store
