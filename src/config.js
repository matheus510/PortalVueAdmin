export const menuConfig = {
  items:
  [
    {
      label: 'Dashboard',
      icon: 'fa-clone',
      value: 'modules/dashboard/dashboard.html'
    },
    {
      label: 'Pessoa',
      icon: 'fa-users',
      value: 'modules/gerenciarme/pessoa/pessoa_grid.html',
      rule: 'App.configurations.env.module === "gerenciarme" && {PESSOA_READ}'
    },
    {
      label: 'Usuário',
      icon: 'fa-user',
      subItems: [
        {
          label: 'Usuário',
          value: 'modules/gerenciarme/usuario/usuario_grid.html',
          rule: 'App.configurations.env.module === "gerenciarme" && {USUARIO_READ}'
        },
        {
          label: 'Grupo',
          value: 'modules/gerenciarme/usuario_grupo/usuario_grupo_grid.html',
          rule: 'App.configurations.env.module === "gerenciarme" && {USUARIO_GRUPO_READ}'
        }
      ]
    },
    {
      label: 'Financeiro',
      icon: 'fa-money-bill-alt',
      subItems: [
        {
          label: 'Conta a pagar',
          value: 'modules/gerenciarme/conta/conta_grid.html&tipo=ContaPagar&hashTemplateForceLoad=true',
          rule: 'App.configurations.env.module === "gerenciarme" && {CONTA_PAGAR_READ}'
        },
        {
          label: 'Conta a receber',
          value: 'modules/gerenciarme/conta/conta_grid.html&tipo=ContaReceber&hashTemplateForceLoad=true',
          rule: 'App.configurations.env.module === "gerenciarme" && {CONTA_RECEBER_READ}'
        },
        {
          label: 'Centro de custo',
          value: 'modules/gerenciarme/centro_custo/centro_custo_grid.html',
          rule: 'App.configurations.env.module === "gerenciarme" && {CENTRO_CUSTO_READ}'
        },
        {
          label: 'Centro de receita',
          value: 'modules/gerenciarme/centro_receita/centro_receita_grid.html',
          rule: 'App.configurations.env.module === "gerenciarme" && {CENTRO_RECEITA_READ}'
        }
      ]
    },
    {
      label: 'Produto',
      icon: 'fa-archive',
      subItems: [
        {
          label: 'Produto',
          value: 'modules/gerenciarme/produto/produto_grid.html',
          rule: 'App.configurations.env.module === "gerenciarme" && {PRODUTO_READ}'
        },
        {
          label: 'Grupo',
          value: 'modules/gerenciarme/produto_grupo/produto_grupo_grid.html',
          rule: 'App.configurations.env.module === "gerenciarme" && {PRODUTO_GRUPO_READ}'
        },
        {
          label: 'Movimentação',
          value: 'modules/gerenciarme/produto_estoque_movimentacao/produto_estoque_movimentacao_grid.html',
          rule: 'App.configurations.env.module === "gerenciarme" && {PRODUTO_ESTOQUE_MOVIMENTACAO_READ}'
        }
      ]
    },
    {
      label: 'Pedido',
      icon: 'fa-edit',
      subItems: [
        {
          label: 'Venda',
          value: 'modules/gerenciarme/pedido/pedido_grid.html&tipo=PedidoVenda&hashTemplateForceLoad=true',
          rule: 'App.configurations.env.module === "gerenciarme" && {PEDIDO_VENDA_READ}'
        },
        {
          label: 'Compra',
          value: 'modules/gerenciarme/pedido/pedido_grid.html&tipo=PedidoCompra&hashTemplateForceLoad=true',
          rule: 'App.configurations.env.module === "gerenciarme" && {PEDIDO_COMPRA_READ}'
        }
      ]
    },
    {
      label: 'Contrato',
      icon: 'fa-file-alt',
      subItems: [
        {
          label: 'Venda',
          value: 'modules/gerenciarme/contrato/contrato_grid.html&tipo=ContratoVenda&hashTemplateForceLoad=true',
          rule: 'App.configurations.env.module === "gerenciarme" && {CONTRATO_VENDA_READ}'
        },
        {
          label: 'Compra',
          value: 'modules/gerenciarme/contrato/contrato_grid.html&tipo=ContratoCompra&hashTemplateForceLoad=true',
          rule: 'App.configurations.env.module === "gerenciarme" && {CONTRATO_COMPRA_READ}'
        }
      ]
    },
    {
      label: 'Linha',
      icon: 'fa-link',
      value: 'modules/jukebox/linha/linha_grid.html',
      rule: 'App.configurations.env.module === "gerenciarme" && App.configurations.env.jukebox && {CONFIGURACAO_READ} AND {PESSOA_READ} AND {CONTRATO_VENDA_READ} AND {PEDIDO_VENDA_READ}'
    },
    {
      label: 'Coleta',
      icon: 'fa-motorcycle',
      value: 'modules/jukebox/coleta/coleta_form.html',
      rule: 'App.configurations.env.module === "gerenciarme" && App.configurations.env.jukebox && {PEDIDO_VENDA_WRITE} AND {CONTRATO_VENDA_READ} AND {CONFIGURACAO_READ} AND {PRODUTO_READ} AND {PESSOA_READ} AND {PRODUTO_ATRIBUTO_WRITE} AND {PRODUTO_ATRIBUTO_READ}'
    }
  ]
}
