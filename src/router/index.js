import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Grid from '@/pages/Grid'
import Modal from '@/pages/Modal'
import Charts from '@/pages/Charts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login'
    },
    {
      path: '/grid',
      name: 'Grid',
      component: Grid
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/modal',
      name: 'Modal Test',
      component: Modal
    },
    {
      path: '/charts',
      name: 'Charts Test',
      component: Charts
    }
  ]
})
