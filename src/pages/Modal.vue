<template>
  <v-layout row justify-center>
    <portal-modal :modalObject="modalConfig"></portal-modal>
    <v-btn id="open-modal" @click.stop="modalConfig.active = true">Abrir modal</v-btn>
  </v-layout>
</template>

<script>
import PortalModal from '@/components/ui/PortalModal'

export default {
  data () {
    return {
      modalConfig: {
        active: false,
        type: 'danger',
        title: 'Deu certo!',
        content: 'Teste de modal deu certo!',
        confirmButton: {
          text: 'ok!'
        }
      }
    }
  },

  components: {
    PortalModal
  }
}
</script>

<style>

</style>
