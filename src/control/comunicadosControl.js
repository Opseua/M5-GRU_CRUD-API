// Importa modulos necessarios
const conn = require('../model/mysql');

// Objeto "controller" para a entidade "comunicados" do banco de dados.
const comunicadosControl = {

    // Lista todos os registros válidos.
    getAll: async (req, res) => {
        try {
            const [rows] = await conn.query("SELECT * FROM comunicados");
            res.json({ data: rows });
        } catch (error) {
            res.json({ status: "error", message: error });
        }
    },

    // Lista um registro único pelo Id.
    getOne: async (req, res) => {
        try {
            const { id } = req.params;
            const [rows] = await conn.query("SELECT * FROM comunicados WHERE comunicado_id = ?", [id]);
            res.json({ data: rows });
        } catch (error) {
            res.json({ status: "error", message: error });
        }
    },

    // apaga um registro único pelo Id.
    delete: async (req, res) => {
        try {
            const { id } = req.params
            const sql = "DELETE FROM comunicados WHERE comunicado_id = ?"
            const [rows] = await conn.query(sql, [id]);
            res.json({ data: rows });
        } catch (error) {
            res.json({ status: "error", message: error });
        }
    },

    // Insere um novo registro.
    post: async (req, res) => {
        try {
            const { comunicado_genero, comunicado_informacao, comunicado_feedback, comunicado_link } = req.body;
            const sql = "INSERT INTO comunicados (comunicado_genero, comunicado_informacao, comunicado_feedback, comunicado_link) VALUES (?, ?, ?, ?)";
            const [rows] = await conn.query(sql, [comunicado_genero, comunicado_informacao, comunicado_feedback, comunicado_link]);
            res.json({ data: rows });
        } catch (error) {
            res.json({ status: "error", message: error });
        }
    },

    // Edita o registro pelo Id.
    put: async (req, res) => {
        try {
            const { comunicado_genero, comunicado_informacao, comunicado_feedback, comunicado_link } = req.body;
            const { id } = req.params;
            const sql = "UPDATE comunicados SET comunicado_genero = ?, comunicado_informacao = ?, comunicado_feedback = ?,  comunicado_link = ? WHERE comunicado_id = ?"
            const [rows] = await conn.query(sql, [comunicado_genero, comunicado_informacao, comunicado_feedback, comunicado_link, id]);
            res.json({ data: rows });
        } catch (error) {
            res.json({ status: "error", message: error });
        }
    }
};

// Exporta o módulo.
module.exports = comunicadosControl;
