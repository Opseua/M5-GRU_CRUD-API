// Importa modulos necessarios
const conn = require('../model/mysql');

// Função de validação de dados
const funcionalidadesValidador = require('../model/funcionalidadesValidador');

// Objeto "controllerer" para a entidade "funcionalidades" do banco de dados.
const funcionalidadesControl = {

  // Lista todos os registros válidos.
  getAll: async (req, res) => {
    try {
      const [rows] = await conn.query("SELECT * FROM funcionalidades");
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }
  },

  // Lista um registro único pelo Id.
  getOne: async (req, res) => {
    try {
      var id = req.params.id;
      var [rows] = await conn.query("SELECT * FROM funcionalidades WHERE funcionalidade_id = ?", [id]);
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }
  },

  // Insere um novo registro.
  post: async (req, res) => {
    try {
      const { funcionalidade_titulo, funcionalidade_descricao } = req.body;
      // VALIDAR DADOS
      const erro_validadar = funcionalidadesValidador(funcionalidade_titulo, funcionalidade_descricao);
      if (!(erro_validadar == "VALIDACAO_OK")) {
        return res.json({ "status": "error", "message": erro_validadar });
      }

      const sql = "INSERT INTO funcionalidades (funcionalidade_titulo, funcionalidade_descricao) VALUES (?, ?)";
      const [rows] = await conn.query(sql, [funcionalidade_titulo, funcionalidade_descricao]);
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }
  },

  // Edita o registro pelo Id.
  put: async (req, res) => {
    try {
      const { funcionalidade_titulo, funcionalidade_descricao } = req.body;
      const { id } = req.params;
      // VALIDAR DADOS
      const erro_validadar = funcionalidadesValidador(funcionalidade_titulo, funcionalidade_descricao);
      if (!(erro_validadar == "VALIDACAO_OK")) {
        return res.json({ "status": "error", "message": erro_validadar });
      }

      const sql = "UPDATE funcionalidades SET funcionalidade_titulo = ?, funcionalidade_descricao = ? WHERE funcionalidade_id = ?"
      const [rows] = await conn.query(sql, [funcionalidade_titulo, funcionalidade_descricao, id]);
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }
  },

  // Altera para 'del' um registro único pelo Id.
  delete: async (req, res) => {
    try {
      const { id } = req.params
      const sql = "DELETE FROM funcionalidades WHERE funcionalidade_id = ?"
      const [rows] = await conn.query(sql, [id]);
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }
  }
};

// Exporta o módulo.
module.exports = funcionalidadesControl;
