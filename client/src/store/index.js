import Vue from 'vue'
import Vuex from 'vuex'

import CompaniesService from '../services/CompaniesService.js' // eslint-disable-line no-unused-vars
import CitiesService from '../services/CitiesService.js'

Vue.use(Vuex)

export const store = new Vuex.Store({

  state: {
    loadedOffices: [
    ], // simple offices on page
    allCompaniesCount: 0, // number of companies by city
    companiesByCity: [],
    count: 0,
    cities: {
      count: null,
      citiesList: null
    },
    token: localStorage.getItem('token') || null,
    user: localStorage.getItem('user') || null,
    isUserLoggedIn: localStorage.getItem('isUserLoggedIn') || null
  },

  mutations: {

    loadCompanies: (state, data) => {
      let dataRows;
      dataRows = data.rows
      console.log(dataRows.length)
   
      for(let i = 0; i < dataRows.length; i++) {
        console.log(dataRows[i].City.name)
        dataRows[i].City = `${dataRows[i].City.name}, ${dataRows[i].City.region}`
      }

      state.loadedOffices = dataRows;
      state.allCompaniesCount = data.count
      state.count = data.rows.length
      // console.log(state);
    },

    loadCompanyMutation: (state, data) => {
      state.loadedOffices = data
      state.allCompaniesCount = data.length
    },

    loadCitiesMutation: (state, data) => {
      state.cities.citiesList = data.rows
      // state.allCitiesCount = data.length;
    },

    setToken (state, token) {
      state.token = token
      if (token) {
        state.isUserLoggedIn = true
        localStorage.setItem('isUserLoggedIn', true)
      } else {
        localStorage.setItem('isUserLoggedIn', true)
      }
    },

    setUser (state, user) {
      state.user = user
    }

  },
  actions: {
    async loadCompaniesAction ({ commit }) {
      const result = await CompaniesService.getAllCompanies()
      commit('loadCompanies', result.data)
      console.log('action loadCompanies executed succesfully')
    },

    async loadCities ({ commit }) {
      const result = await CitiesService.getAllCities()
      commit('loadCitiesMutation', result.data)
      console.log('action loadCities executed succesfully')
    },

    async loadCitiesFilteredLimited ({ commit }, value) {
      const result = await CitiesService.getFilteredLimited(value)
      commit('loadCitiesMutation', result.data)
      console.log('action loadCitiesFilteredLimited executed succesfully')
    },

    async loadOnePageData ({ commit }, page) {
      const result = await CompaniesService.getLimited(page)
      console.log(result)
      commit('loadCompanies', result.data)
      console.log('action loadOnePageData executed succesfully')
    },

    async loadSearchResults ({ commit }, search) {
      const result = await CompaniesService.getFiltered(search)
      console.log(result)
      commit('loadCompanyMutation', result.data)

      console.log('action load Search Results executed succesfully')
    },

    async loadSearchResultsLimited ({ commit }, searchParameters) {
      const result = await CompaniesService.getFilteredLimited(searchParameters.city, searchParameters.page, searchParameters.sort)
      commit('loadCompanies', result.data)
      console.log('action load Search Results Limited executed succesfully')
    },

    async loadFirstPageData ({ commit }) {
      const result = await CompaniesService.getFirstLimited()
      commit('loadCompanies', result.data)
      console.log('action loadOnePageData executed succesfully')
    },

    async loadCompany ({ commit }, id) {
      const result = await CompaniesService.getOne(id)
      commit('loadCompanyMutation', result.data)
      console.log('action loadCompany executed succesfully')
    },

    setTokenAction ({ commit }, token) {
      commit('setToken', token)
      // localStorage.setItem('token', token);
      localStorage.setItem('token', JSON.stringify(token))
    },

    setUserAction ({ commit }, user) {
      commit('setUser', user)
      localStorage.setItem('user', JSON.stringify(user))
    }

  },

  getters: {

    state (state) {
      return state
    },

    loadedOffices (state) {
      return state.loadedOffices
    }, // loadoffices

    loadedCities (state) {
      return state.cities.citiesList
    },

    loadedOffice (state) {
      return (officeId) => {
        return state.loadedOffices.find((office) => {
          return office.id === officeId
        }) // return state.loaded...
      } // return officeId
    }, // loadOffice //getter szukający w stanie w załadowanych wszystkich biurach :|

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
      return state.allCompaniesCount
    }

  }, // getters

  modules: {
  } // modules

}) // vue store
