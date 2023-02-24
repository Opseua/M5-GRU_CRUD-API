const conn = require("../config/mysql.js");

const perguntasController = {
  getAll: async (req, res) => {
    try {
      const [rows] = await conn.query("SELECT * FROM perguntas");
      res.status(200).send(rows)
    } catch (error) {
      res.status(400).json({ status: "error", message: error });
    }
  },

  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const [rows] = await conn.query("SELECT * FROM perguntas WHERE id = ?", [id]);
      res.status(200).send(rows);
    } catch (error) {
      res.status(400).json({ status: "error", message: error });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const sql = "DELETE FROM perguntas WHERE id = ?";
      const [rows] = await conn.query(sql, [id]);
      res.status(200).json({ data: rows });
    } catch (error) {
      res.status(400).json({ status: "error", message: error });
    }
  },

  post: async (req, res) => {
    try {
      const { pergunta } = req.body;
      const sql = "INSERT INTO tabela (pergunta) VALUES (?)";
      const [rows] = await conn.query(sql, [pergunta]);
      res.status(201).json({ data: rows });
    } catch (error) {
      res.status(400).json({ status: "error", message: error });
    }
  },

  put: async (req, res) => {
    try {
      const { pergunta } = req.body;
      const { id } = req.params;
      const sql = "UPDATE perguntas SET pergunta = ? WHERE id = ?";
      const [rows] = await conn.query(sql, [pergunta, id]);
      res.status(201).json({ data: rows });
    } catch (error) {
      res.status(400).json({ status: "error", message: error });
    }
  },
};

module.exports = perguntasController;
