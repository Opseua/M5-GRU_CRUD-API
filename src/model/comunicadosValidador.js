function comunicadosValidador(comunicado_genero, comunicado_informacao, comunicado_feedback, comunicado_link) {

  // Validar genero (se é 'Feminino', 'Masculino' ou 'Outros')
  if ((typeof comunicado_genero === 'undefined') || !(comunicado_genero == "Feminino") && !(comunicado_genero == "Masculino") && !(comunicado_genero == "Outros")) {
    return "Erro genero!"
  };

  // Validar comunicado (se tem no mínimo 1 caractere)
  if ((typeof comunicado_informacao === 'undefined') || !(comunicado_informacao.length > 0)) {
    return "Erro informação do comunicado!"
  };

  // Validar feedback (se tem no mínimo 1 caractere)
  if ((typeof comunicado_feedback === 'undefined') || !(comunicado_feedback.length > 0)) {
    return "Erro feedback!"
  };

  // Validar link (se tem padrão 'http://' ou 'https://')
  if ((typeof comunicado_link === 'undefined') || !(comunicado_link.match(/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/))) {
    return "Erro link!"
  };

  return "VALIDACAO_OK";
}

module.exports = comunicadosValidador;




