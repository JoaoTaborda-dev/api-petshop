const modeloTabela = require('../rotas/modeloTabelaFornecedor')

modeloTabela
  .sync()
  .then(() => console.log('Tabela criada com sucesso'))
  .catch(console.log)
