function funcionalidadesValidador(funcionalidades_titulo, funcionalidades_descricao) {

  // Validar titulo (se tem letra e no mínimo 3 caracteres)
  if ((typeof funcionalidades_titulo === 'undefined') || !(funcionalidades_titulo.length > 2) || !(funcionalidades_titulo.match(/^[A-Za-z\s]*$/))) {
    return "Erro titulo!"
  };

    // Validar descrição (se tem letra e no mínimo 3 caracteres)
    if ((typeof funcionalidades_descricao === 'undefined') || !(funcionalidades_descricao.length > 2) || !(funcionalidades_descricao.match(/^[A-Za-z\s]*$/))) {
      return "Erro descrição!"
    };

  return "VALIDACAO_OK";
}

module.exports = funcionalidadesValidador;
