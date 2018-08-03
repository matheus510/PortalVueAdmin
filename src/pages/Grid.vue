<template>
  <portal-grid :gridHeaders="headers" :gridItems="items"></portal-grid>
</template>

<script>
import PortalGrid from '@/components/ui/PortalGrid'

export default {
  data () {
    return {
      headers: [
        {
          text: 'Código',
          value: 'codigo',
          sortable: false
        },
        {
          text: 'Pessoa',
          align: 'left',
          sortable: false,
          value: 'pessoa'
        },
        {
          text: 'CPF/CNPJ',
          value: 'cpfcnpj',
          sortable: false
        },
        {
          text: 'Criação',
          value: 'criacao',
          sortable: false
        },
        {
          text: 'Finalização',
          value: 'finalizacao',
          sortable: false
        },
        {
          text: 'Status',
          value: 'status',
          sortable: false
        },
        {
          text: 'Ações',
          value: 'acoes',
          sortable: false
        }
      ],
      items: [
        {
          codigo: '01',
          pessoa: 'Matheus',
          cpfcnpj: '000.000.000-12',
          criacao: '05/10/2018',
          finalizacao: '06/10/2019',
          status: 'ativo'
        },
        {
          codigo: '02',
          pessoa: 'Jow',
          cpfcnpj: '000.000.000-12',
          criacao: '05/10/2018',
          finalizacao: '06/10/2019',
          status: 'ativo'
        },
        {
          codigo: '03',
          pessoa: 'Matheus',
          cpfcnpj: '000.000.000-12',
          criacao: '05/10/2018',
          finalizacao: '06/10/2019',
          status: 'ativo'
        },
        {
          codigo: '04',
          pessoa: 'Jow',
          cpfcnpj: '000.000.000-12',
          criacao: '05/10/2018',
          finalizacao: '06/10/2019',
          status: 'ativo'
        }
      ]
    }
  },
  components: {
    PortalGrid
  }
}
</script>

<style>

</style>
