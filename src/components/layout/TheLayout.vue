<template>
  <div>
    <div v-if="!this.userInfo()">
      <v-container id="loginContainer">
        <v-layout wrap>
          <v-flex>
            <login></login>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div v-if="this.userInfo()">
      <the-toolbar></the-toolbar>
      <the-sidemenu></the-sidemenu>
      <v-content>
        <v-container grid-list-xl fill-height>
          <v-layout justify-center align-center>
            <router-view></router-view>
          </v-layout>
        </v-container>
      </v-content>
    </div>
  </div>
</template>

<script>
import TheSidemenu from '@/components/layout/TheSidemenu'
import TheToolbar from '@/components/layout/TheToolbar'
import Login from '@/components/auth/Login'

import { mapGetters } from 'vuex'

export default {
  components: {
    TheSidemenu,
    TheToolbar,
    Login
  },
  methods: {
    ...mapGetters({
      userInfo: 'userInfo'
    })
  }
}
</script>

<style>

</style>
