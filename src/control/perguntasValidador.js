function perguntasValidador(pergunta_pergunta) {

  // Validar pergunta (se tem no mínimo 1 caractere)
  if ((typeof pergunta_pergunta === 'undefined') || !(pergunta_pergunta.length > 0)) {
    return "Erro pergunta!"
  };

  return "VALIDACAO_OK";
}

module.exports = perguntasValidador;
