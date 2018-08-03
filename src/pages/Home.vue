<template>
  <v-jumbotron color="grey lighten-2">
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h3 class="display-3">Bem-vindo</h3>
          <span class="subheading">Hoje é dia {{ dataFormatada }}</span>
          <v-divider class="my-3"></v-divider>
          <div class="title mb-3"></div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>

<script>
import moment from 'moment'
export default {
  data () {
    return {
    }
  },
  computed: {
    dataFormatada () {
      return moment().format('LL')
    }
  }
}
</script>

<style>

</style>
