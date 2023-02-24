// Importa modulos necessarios
const conn = require('../model/mysql');

// Objeto "controller" para a entidade "notas" do banco de dados.
const notasControl = {

    // Lista todos os registros válidos.
    getAll: async (req, res) => {
        try {
            const [rows] = await conn.query("SELECT * FROM notas");
            res.json({ data: rows });
        } catch (error) {
            res.json({ status: "error", message: error });
        }
    },

    // Lista um registro único pelo Id.
    getOne: async (req, res) => {
        try {
            const { id } = req.params;
            const [rows] = await conn.query("SELECT * FROM notas WHERE nota_id = ?", [id]);
            res.json({ data: rows });
        } catch (error) {
            res.json({ status: "error", message: error });
        }
    },

    // Insere um novo registro.
    post: async (req, res) => {
        try {
            const { nota_titulo, nota_informacao, nota_ultima_edicao, usuario_id } = req.body;
            const sql = "INSERT INTO notas ( nota_titulo, nota_informacao,nota_ultima_edicao, usuario_id) VALUES (?, ?, ?, ?)";
            const [rows] = await conn.query(sql, [nota_titulo, nota_informacao, nota_ultima_edicao, usuario_id]);
            res.json({ data: rows });
        } catch (error) {
            res.json({ status: "error", message: error });
        }
    },

    // Edita o registro pelo Id.
    put: async (req, res) => {
        try {
            const { nota_titulo, nota_informacao, nota_ultima_edicao, usuario_id, } = req.body;
            const { id } = req.params;
            const sql = "UPDATE notas SET nota_titulo = ?, nota_informacao = ?,nota_ultima_edicao = ?, usuario_id = ? WHERE nota_id = ?"
            const [rows] = await conn.query(sql, [nota_titulo, nota_informacao, nota_ultima_edicao, usuario_id, id]);
            res.json({ data: rows });
        } catch (error) {
            res.json({ status: "error", message: error });
        }
    },

    // apaga um registro único pelo Id.
    delete: async (req, res) => {
        try {
            const { id } = req.params
            const sql = "DELETE FROM notas  WHERE nota_id = ?"
            const [rows] = await conn.query(sql, [id]);
            res.json({ data: rows });
        } catch (error) {
            res.json({ status: "error", message: error });
        }
    }
};

// Exporta o módulo.
module.exports = notasControl;
