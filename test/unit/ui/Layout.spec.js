import { mount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import TheLayout from '@/components/layout/TheLayout'

Vue.use(Vuetify)

describe('Testes no componente de Layout', () => {
  let component

  beforeEach(() => {
    component = mount(TheLayout, {
      stubs: ['router-view']
    })
  })
  it('Activate/deactivate menu', () => {
    const toogleBtn = component.find('#toogle-menu')
    expect(component.vm.$children[1].menuStatus).toBe(false)
    toogleBtn.trigger('click')
    expect(component.vm.$children[1].menuStatus).toBe(true)
  })
})
