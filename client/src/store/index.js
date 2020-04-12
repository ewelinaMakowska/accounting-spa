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
    allCompaniesCount: 0,
    count: 0,
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
      state.allCompaniesCount = data.count;
      state.count = data.rows.length;
      console.log(state);
    },

    loadCompanyMutation: (state, data) => {
      state.loadedOffices = data;
    }

  },
  actions: {
    async loadCompaniesAction ({ commit })  {
      const result = await CompaniesService.getAllCompanies();
      commit('loadCompanies', result.data);
      console.log('action loadCompanies executed succesfully');   
    },

    async loadOnePageData ({ commit }, page)  {
      const result = await CompaniesService.getLimited(page);
      commit('loadCompanies', result.data);
      console.log('action loadOnePageData executed succesfully');  
  },

  async loadFirstPageData ({ commit })  {
    const result = await CompaniesService.getFirstLimited();
    commit('loadCompanies', result.data);
    console.log('action loadOnePageData executed succesfully');  
},

async loadCompany ({ commit }, id)  {
  //const result = await CompaniesService.getOne(req.params.id);
  const result = await CompaniesService.getOne(id);
  commit('loadCompanyMutation', result.data);
  console.log('action loadCompany executed succesfully');  
},


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

    }, //loadOffice //getter szukający w stanie w załadowanych wszystkich biurach :|


    // oneCompany (state, id) {
    //   console.log(state.loadedOffices)
    //      let x = state.loadedOffices.find(office => {
    //       office.id === id; });
    //       return x;
    // }, //loadOffice //getter szukający w stanie w załadowanych wszystkich biurach :|


  /*   loadedOffice (state) {
// ma zaciągnąc tylko jedno biuro
return state.loadedOffices; //?
    },  */


    countValue (state) {
      return state.allCompaniesCount;
    }

  }, //getters

  modules: {
  }, //modules

}) //vue store
