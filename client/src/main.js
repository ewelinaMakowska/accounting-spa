import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import OfficePage from '@/views/OfficePage.vue' 
import OfficeCatalogue from '@/views/OfficeCatalogue.vue' 
import LoginPage from '@/views/LoginPage.vue' 
import RegistrationPage from '@/views/RegistrationPage.vue' 
import { store } from './store'
import vuetify from './plugins/vuetify';

Vue.use(VueRouter);



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
    path:'*',
    redirect: '/'
  } 
  //{ path: '/search', component: SearchUser, props: (route) => ({ query: route.query.q }) }
  
]



const router = new VueRouter({
  routes: routes,
  mode: 'history'
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

function castRouteParams(route) {
  return {
    id: Number(route.params.id),
  }}