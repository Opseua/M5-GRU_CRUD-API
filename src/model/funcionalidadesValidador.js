function funcionalidadesValidador(funcionalidades_titulo, funcionalidades_descricao) {

  // Validar titulo (se tem no mínimo 3 caracteres)
  if ((typeof funcionalidades_titulo === 'undefined') || !(funcionalidades_titulo.length > 2)) {
    return "Erro titulo!"
  };

    // Validar descrição (se tem no mínimo 3 caracteres)
    if ((typeof funcionalidades_descricao === 'undefined') || !(funcionalidades_descricao.length > 2)) {
      console.log(funcionalidades_titulo);
      console.log(funcionalidades_descricao);
      return "Erro descrição!"
    };

  return "VALIDACAO_OK";
}

module.exports = funcionalidadesValidador;
