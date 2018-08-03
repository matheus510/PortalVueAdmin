<template>
  <v-navigation-drawer permanent :mini-variant.sync="menuStatus" app>
    <v-list class="pt-0" expand>
      <v-list-group
        v-for="item in menu"
        :key="item.label"
        no-action
        :appendIcon="item.subItems ? 'keyboard_arrow_down' : null"
        >
        <v-list-tile slot="activator">
          <v-list-tile-action>
            <v-icon small class="menu--svg">{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="text-xs-left">{{ item.label }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="item.subItems" v-for="subItem in item.subItems" :key="subItem.label">
          <v-list-tile-content>
            <v-list-tile-title class="text-xs-left">{{ subItem.label }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// config file (change if needed)
import { menuConfig } from '../../config.js'

import { LayoutEventBus } from './LayoutEventBus'

export default {
  data () {
    return {
      menu: menuConfig.items,
      menuStatus: false
    }
  },

  methods: {
    menuClicked () {
      this.menuStatus = !this.menuStatus
    }
  },

  created () {
    let vm = this
    LayoutEventBus.$on('menuToogle', () => {
      vm.menuStatus = !vm.menuStatus
    }, vm)
  }
}
</script>
<style scoped>
.menu--svg {
  margin: 0 auto;
}
</style>
