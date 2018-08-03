// basic vue ecosystem
import Vue from 'vue'
import App from './App'
import router from './router'

// additional core libs
import moment from 'moment'
import Vuetify from 'vuetify'

// vuex store object
import { store } from './store/store'

moment.locale('pt-br')

Vue.use(Vuetify, {
  theme: {
    primary: '#3f51b5',
    secondary: '#b0bec5',
    success: '#7CB342',
    alert: '#FF9100',
    danger: '#E53935'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
