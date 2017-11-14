Vue.config.productionTip = false

import Vue from 'vue'

import VueRouter from 'vue-router'

import 'mint-ui/lib/style.css'

import "@/styles/app.scss"

import router from './router/'

import store from './store/'

import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store
}).$mount('#app')
