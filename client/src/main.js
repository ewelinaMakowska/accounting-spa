//import Vue from 'vue'
var Vue = require('vue').default;

//import App from './App.vue'

import Home from './views/Home.vue'
import OfficePage from './views/OfficePage.vue' 
import OfficeCatalogue from './views/OfficeCatalogue.vue' 
import LoginPage from './views/LoginPage.vue' 
import RegistrationPage from './views/RegistrationPage.vue' 
import EditContentPage from './views/EditContentPage.vue' 
import UserProfilePage from './views/UserProfilePage.vue' 

//import VueRouter from 'vue-router'
import { store } from './store'

var VueRouter = require('vue-router').default;
//import { sync } from 'vuex-router-sync'
var sync = require('vuex-router-sync').sync;

//import '../assets/scss/app'

/* if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
} */


const routes = [
  {
    path: '/', 
    component: Home
  },
  {
    path: '/search',
    name: 'office-catalogue',
  /*  props: castRouteParams, */
    component: OfficeCatalogue
  },
  {
    path: '/office/:id',
    name: 'office-page',
    props: castRouteParams,
    component: OfficePage
  },
  {
    path: '/login',
    name: 'login-page',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'registration-page',
    component: RegistrationPage
  },
  {
    path: '/user',
    name: 'user-page',
    component: UserProfilePage
  },
  {
    path: '/edit-content',
    name: 'edit-content-page',
    component: EditContentPage
  },
  {
    path:'*',
    redirect: '/'
  } 
  //{ path: '/search', component: SearchUser, props: (route) => ({ query: route.query.q }) }
  
]



const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

Vue.use(VueRouter);
sync(store, router)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

function castRouteParams(route) {
  return {
    id: Number(route.params.id),
  }}