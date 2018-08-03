import Vuex from 'vuex'
import Vue from 'vue'

import login from './modules/loginModule'
import layout from './modules/layoutModule'
import config from './modules/configModule'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {

  },
  modules: {
    login,
    layout,
    config
  }
})
