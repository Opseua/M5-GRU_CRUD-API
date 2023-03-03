function sobreValidador(sobre_titulo, sobre_descricao) {

  // Validar titulo (se tem no mínimo 3 caracteres)
  if ((typeof sobre_titulo === 'undefined') || !(sobre_titulo.length > 2)) {
    return "Erro titulo!"
  };

    // Validar descrição (se tem no mínimo 3 caracteres)
    if ((typeof sobre_descricao === 'undefined') || !(sobre_descricao.length > 2)) {
      console.log(sobre_titulo);
      console.log(sobre_descricao);
      return "Erro descrição!"
    };

  return "VALIDACAO_OK";
}

module.exports = sobreValidador;
