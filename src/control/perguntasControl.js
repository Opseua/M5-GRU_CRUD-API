// Importa modulos necessarios
const conn = require('../model/mysql');

// Objeto "controller" para a entidade "perguntas" do banco de dados.
const perguntasControl = {

  // Lista todos os registros válidos.
  getAll: async (req, res) => {
    try {
      const [rows] = await conn.query("SELECT * FROM perguntas");
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }
  },

  // Lista um registro único pelo Id.
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const [rows] = await conn.query("SELECT * FROM perguntas WHERE pergunta_id = ?", [id]);
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }
  },

  // Insere um novo registro.
  post: async (req, res) => {
    try {
      const { pergunta_pergunta } = req.body;
      const sql = "INSERT INTO perguntas (pergunta_pergunta) VALUES (?)";
      const [rows] = await conn.query(sql, [pergunta_pergunta]);
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }
  },

  // Edita o registro pelo Id.
  put: async (req, res) => {
    try {
      const { pergunta_pergunta } = req.body;
      const { id } = req.params;
      const sql = "UPDATE perguntas SET pergunta_pergunta = ? WHERE pergunta_id = ?";
      const [rows] = await conn.query(sql, [pergunta_pergunta, id]);
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }
  },

  // Apaga um registro único pelo Id.
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const sql = "DELETE FROM perguntas WHERE pergunta_id = ?";
      const [rows] = await conn.query(sql, [id]);
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }
  }
};

// Exporta o módulo.
module.exports = perguntasControl;
