<template>
  <div>
    <v-data-table
      :headers="gridHeaders"
      :items="gridItems"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <tr :active="props.selected" @click="props.selected = !props.selected">
            <td v-for="header in gridHeaders" :key="header.value">
              <span v-if="header.value !== 'acoes'">{{ props.item[header.value] }}</span>
              <span v-else>
                <td class="text-xs-right layout px-0">
                  <v-btn icon class="mx-0" @click="editItem(props.item)">
                    <v-icon color="primary">edit</v-icon>
                  </v-btn>
                  <v-btn icon class="mx-0" @click="deleteItem(props.item)">
                    <v-icon color="secondary">delete</v-icon>
                  </v-btn>
                </td>
              </span>
            </td>
        </tr>
      </template>
      <template slot="no-data">
        Carregando...
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  props: {
    gridHeaders: {
      type: Array,
      required: true
      // falta validação.
    },
    gridItems: {
      type: Array,
      required: true
      // falta validação.
    }
  },

  data: () => ({
    items: []
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },

  methods: {
    propNamesLength (prop) {
      return (Object.getOwnPropertyNames(prop).length + 1)
    },
    initialize () {
      // this.items = this.$store.getters
    },

    editItem (item) {
    },

    deleteItem (item) {
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.items[this.editedIndex], this.editedItem)
      } else {
        this.items.push(this.editedItem)
      }
      this.close()
    }
  }
}
</script>

<style>

</style>
