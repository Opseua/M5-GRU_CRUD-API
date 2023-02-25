function usuariosValidador(usuario_nome, usuario_genero, usuario_nascimento, usuario_peso, usuario_altura, usuario_tipo_sanguineo, usuario_imc, usuario_email, usuario_senha, usuario_reset_pergunta, usuario_reset_resposta) {

  // Validar nome (se tem letra e no mínimo 3 caracteres)
  if ((typeof usuario_nome === 'undefined') || !(usuario_nome.length > 2) || !(usuario_nome.match(/^[A-Za-z\s]*$/))) {
    return "Erro nome!"
  };

  // Validar genero (se é 'Feminino', 'Masculino' ou 'Outros')
  if ((typeof usuario_genero === 'undefined') || !(usuario_genero == "Feminino") && !(usuario_genero == "Masculino") && !(usuario_genero == "Outros")) {
    return "Erro genero!"
  };

  // Validar data de nascimento (se está no padrão '2022-02-24')
  if ((typeof usuario_nascimento === 'undefined') || !(usuario_nascimento.match(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/))) {
    return "Erro data de nascimento!";
  };

  // Validar peso (se é maior que '10.0')
  if ((typeof usuario_peso === 'undefined') || !(usuario_peso > 10.0)) {
    return "Erro peso!";
  };

  // Validar altura (se é maior que '1.0')
  if ((typeof usuario_altura === 'undefined') || !(usuario_altura > 1.0)) {
    return "Erro altura!";
  };

  // Validar tipo sanguineo (se é igual a 'A+', 'B+', 'AB+', 'O+', 'A-', 'B-', 'AB-' ou 'O-')
  if ((typeof usuario_tipo_sanguineo === 'undefined') || !(usuario_tipo_sanguineo == 'A+') && !(usuario_tipo_sanguineo == 'B+') && !(usuario_tipo_sanguineo == 'AB+') && !(usuario_tipo_sanguineo == 'O+') && !(usuario_tipo_sanguineo == 'A-') && !(usuario_tipo_sanguineo == 'B-') && !(usuario_tipo_sanguineo == 'AB-') && !(usuario_tipo_sanguineo == 'O-')) {
    return "Erro tipo sanguineo!";
  };

  // Validar IMC (se é entre '10' e '40)
  if ((typeof usuario_imc === 'undefined') || !(usuario_imc >= 10) || !(usuario_imc <= 40)) {
    return "Erro IMC!";
  };

  // Validar email
  if ((typeof usuario_email === 'undefined') || !(usuario_email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/))) {
    return "Erro email!";
  }

  // Validar senha (se possui no mínimo 8 caracteres)
  if ((typeof usuario_senha === 'undefined') || !(usuario_senha.length > 7)) {
    return "Erro senha!";
  }

  // Validar reset pergunta (se possui no mínimo 5 caracteres e letras)
  if ((typeof usuario_reset_pergunta === 'undefined') || !(usuario_reset_pergunta.length > 4) || !(usuario_reset_pergunta.match(/^[a-zA-Z0-9]/))) {
    return "Erro reset pergunta!";
  }

  // Validar reset resposta (se possui no mínimo 1 caracteres)
  if ((typeof usuario_reset_resposta === 'undefined') || !(usuario_reset_resposta.length > 0)) {
    return "Erro reset resposta!";
  }

  return "VALIDACAO_OK";
}

module.exports = usuariosValidador;
