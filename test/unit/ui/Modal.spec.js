import { mount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import Modal from '@/pages/Modal'

Vue.use(Vuetify)

describe('Testes no componente de Layout', () => {
  let component

  beforeEach(() => {
    component = mount(Modal)
  })
  it('Activate/deactivate menu', () => {
    const toogleBtn = component.find('#open-modal')
    toogleBtn.trigger('click')
    expect(component.vm.$children[0].modalContent.active).toBe(true)
  })
})
