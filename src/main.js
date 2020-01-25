import Vue from 'vue'
import App from './App.vue'
import Home from '@/components/Home.vue'
import VueRouter from 'vue-router'
import OfficePage from '@/views/OfficePage.vue' 
import { store } from './store'
import vuetify from './plugins/vuetify';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
     component: Home
  },
  {
    path: '/office/:id',
    name: 'office-page',
    props: true,
    component: OfficePage
  },
  {
    path:'*',
    redirect: '/'
  }
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
