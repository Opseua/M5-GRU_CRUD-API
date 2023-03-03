function notasValidador(nota_titulo, nota_informacao, nota_ultima_edicao, usuario_id) {

  // Validar titulo (se tem no mínimo 1 caractere)
  if ((typeof nota_titulo === 'undefined') || !(nota_titulo.length > 0)) {
    return "Erro titulo!"
  };

  // Validar informação (se tem no mínimo 1 caractere)
  if ((typeof nota_informacao === 'undefined') || !(nota_informacao.length > 0)) {
    return "Erro informacao!"
  };

  // Validar data última edição (se está no padrão '2022-02-24 12:30:00')
  if ((typeof nota_ultima_edicao === 'undefined') || !(nota_ultima_edicao.match(/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/))) {
    return "Erro data da ultima edicao!";
  };

  // Validar usuário ID (chave estrangeira)
  if ((typeof usuario_id === 'undefined') || !(usuario_id > 0)) {
    return "Erro usuário ID (chave estrangeira)!";
  };

  return "VALIDACAO_OK";
}

module.exports = notasValidador;
