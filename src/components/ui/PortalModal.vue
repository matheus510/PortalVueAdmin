<template>
  <v-dialog v-model="modalContent.active" persistent max-width="500px">
    <v-card>
      <v-card-title :class="modalContent.type" class="white--text">
        <span class="headline">{{ modalContent.title }}</span>
      </v-card-title>
      <v-card-text>
       {{ modalContent.content }}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :class="modalContent.type" class="white--text" flat @click.native="modalContent.active = false">{{ modalContent.confirmButton.text }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    modalObject: {
      type: Object,
      required: true
      // falta validação.
    }
  },

  data () {
    return {
      modalContent: this.modalObject
    }
  }
}
</script>

<style>
</style>
