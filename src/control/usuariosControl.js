// Importa modulos necessarios
const conn = require('../model/mysql');

// Objeto "controller" para a entidade "usuarios" do banco de dados.
const usuariosControl = {

  // Lista todos os registros válidos.
  getAll: async (req, res) => {
    try {
      const [rows] = await conn.query("SELECT * FROM usuarios WHERE usuario_status = 'on'");
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }
  },

  // Lista um registro único pelo Id.
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const [rows] = await conn.query("SELECT * FROM usuarios WHERE usuario_id = ? AND usuario_status = 'on'", [id]);
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }
  },

  // Insere um novo registro.
  post: async (req, res) => {
    try {
      const { usuario_nome, usuario_genero, usuario_nascimento, usuario_peso, usuario_altura, usuario_tipo_sanguineo, usuario_imc, usuario_email, usuario_senha, usuario_reset_pergunta, usuario_reset_resposta } = req.body;
      const sql = "INSERT INTO usuarios (usuario_nome, usuario_genero, usuario_nascimento, usuario_peso, usuario_altura, usuario_tipo_sanguineo, usuario_imc, usuario_email, usuario_senha, usuario_reset_pergunta, usuario_reset_resposta) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
      const [rows] = await conn.query(sql, [usuario_nome, usuario_genero, usuario_nascimento, usuario_peso, usuario_altura, usuario_tipo_sanguineo, usuario_imc, usuario_email, usuario_senha, usuario_reset_pergunta, usuario_reset_resposta]);
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }
  },

  // Edita o registro pelo Id.
  put: async (req, res) => {
    try {
      const { usuario_nome, usuario_genero, usuario_nascimento, usuario_peso, usuario_altura, usuario_tipo_sanguineo, usuario_imc, usuario_email, usuario_senha, usuario_reset_pergunta, usuario_reset_resposta, usuario_status } = req.body;
      const { id } = req.params;
      const sql = "UPDATE usuarios SET usuario_nome = ?, usuario_genero = ?, usuario_nascimento = ?, usuario_peso = ?, usuario_altura = ?, usuario_tipo_sanguineo = ?, usuario_imc = ?, usuario_email = ?, usuario_senha = ?, usuario_reset_pergunta = ?, usuario_reset_resposta = ?, usuario_status = ? WHERE usuario_id = ?"
      const [rows] = await conn.query(sql, [usuario_nome, usuario_genero, usuario_nascimento, usuario_peso, usuario_altura, usuario_tipo_sanguineo, usuario_imc, usuario_email, usuario_senha, usuario_reset_pergunta, usuario_reset_resposta, usuario_status, id]);
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }
  },

  // Altera para 'del' um registro único pelo Id.
  delete: async (req, res) => {
    try {
      const { id } = req.params
      const sql = "UPDATE usuarios SET usuario_status = 'del' WHERE usuario_id = ?"
      const [rows] = await conn.query(sql, [id]);
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }
  }
};

// Exporta o módulo.
module.exports = usuariosControl;
