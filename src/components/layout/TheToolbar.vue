<template>
  <v-toolbar dark color="primary" app>
    <v-toolbar-side-icon id="toogle-menu" @click.native.stop="toogleMenu"></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">Portal</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>refresh</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import { LayoutEventBus } from './LayoutEventBus'
export default {
  data () {
    return {

    }
  },
  computed: {
  },
  methods: {
    toogleMenu () {
      LayoutEventBus.$emit('menuToogle')
    }
  }
}
</script>

<style>

</style>
