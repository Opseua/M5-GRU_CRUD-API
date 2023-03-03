// Importa modulos necessarios
const conn = require('../model/mysql');

// Função de validação de dados
const sobreValidador = require('../model/sobreValidador');

// Objeto "controllerer" para a entidade "sobre" do banco de dados.
const sobreControl = {

  // Lista todos os registros válidos.
  getAll: async (req, res) => {
    try {
      const [rows] = await conn.query("SELECT * FROM sobre");
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }
  },

  // Lista um registro único pelo Id.
  getOne: async (req, res) => {
    try {
      var id = req.params.id;
      var [rows] = await conn.query("SELECT * FROM sobre WHERE sobre_id = ?", [id]);
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }
  },

  // Insere um novo registro.
  post: async (req, res) => {
    try {
      const { sobre_titulo, sobre_descricao } = req.body;
      // VALIDAR DADOS
      const erro_validadar = sobreValidador(sobre_titulo, sobre_descricao);
      if (!(erro_validadar == "VALIDACAO_OK")) {
        return res.json({ "status": "error", "message": erro_validadar });
      }

      const sql = "INSERT INTO sobre (sobre_titulo, sobre_descricao) VALUES (?, ?)";
      const [rows] = await conn.query(sql, [sobre_titulo, sobre_descricao]);
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }
  },

  // Edita o registro pelo Id.
  put: async (req, res) => {
    try {
      const { sobre_titulo, sobre_descricao } = req.body;
      const { id } = req.params;
      // VALIDAR DADOS
      const erro_validadar = sobreValidador(sobre_titulo, sobre_descricao);
      if (!(erro_validadar == "VALIDACAO_OK")) {
        return res.json({ "status": "error", "message": erro_validadar });
      }

      const sql = "UPDATE sobre SET sobre_titulo = ?, sobre_descricao = ? WHERE sobre_id = ?"
      const [rows] = await conn.query(sql, [sobre_titulo, sobre_descricao, id]);
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }
  },

  // Altera para 'del' um registro único pelo Id.
  delete: async (req, res) => {
    try {
      const { id } = req.params
      const sql = "DELETE FROM sobre WHERE sobre_id = ?"
      const [rows] = await conn.query(sql, [id]);
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }
  }
};

// Exporta o módulo.
module.exports = sobreControl;
