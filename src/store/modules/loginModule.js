const state = {
  autorizacao: {
    usuarioApelido: '',
    matriz: '',
    token: ''
  },
  usuario: {
    id: '',
    status: '',
    estabelecimentoPadrao: {
      id: '',
      pessoa: {
        id: '',
        alias: '',
        apelido: '',
        nome: '',
        cpf: '',
        tipo: '',
        emails: [],
        telefones: [],
        pessoaEnderecos: [],
        pessoaAtributos: []
      }
    },
    pessoaFisica: {

    },
    usuarioGrupo: {
      id: '',
      nome: '',
      perfis: []
    }
  }
}
const getters = {
  userInfo (state) {
    return state.autorizacao.usuarioApelido
  }
}
const mutations = {
  setAutenticacao (state, payload) {
    state.autorizacao.usuarioApelido = payload.payload.usuarioApelido
    state.autorizacao.token = payload.payload.token
    state.autorizacao.matriz = payload.payload.matriz
    state.usuario = payload.payload.usuario
  }
}
const actions = {
  setAutenticacao ({ commit }, payload) {
    commit({
      type: 'setAutenticacao',
      payload
    })
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
