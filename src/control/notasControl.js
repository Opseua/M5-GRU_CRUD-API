const conn = require('../model/mysql');

const notasControl = {

    getAll: async (req, res) => {
        
        try {

            const [rows] = await conn.query("SELECT * FROM notas");
            res.json({ data: rows });

        } catch (error) {

            res.json({ status: "error", message: error });
        }
    },

    getOne: async (req, res) => {
        
        try {

            const { id } = req.params;
            const [rows] = await conn.query("SELECT * FROM notas WHERE nota_id = ?", [id]);
            res.json({ data: rows });
        
        } catch (error) {
            
            res.json({ status: "error", message: error });
        }
    },

    delete: async (req, res) => {

        try {
            
            const { id } = req.params
            const sql = "DELETE FROM notas  WHERE nota_id = ?"
            const [rows] = await conn.query(sql, [id]);
            res.json({ data: rows });
        
        } catch (error) {
        
            res.json({ status: "error", message: error });
        }
    },

    post: async (req, res) => {

        try {
        
            const {  nota_titulo,nota_informacao, nota_ultima_edicao, usuario_id} = req.body;

            // Validação (titulo,informacao,ultimo edicao)

            const sql = "INSERT INTO notas ( nota_titulo, nota_informacao,nota_ultima_edicao, usuario_id) VALUES (?, ?, ?, ?)";
            const [rows] = await conn.query(sql, [ nota_titulo,nota_informacao,nota_ultima_edicao, usuario_id ]);
            res.json({ data: rows });
        
        } catch (error) {
        
            res.json({ status: "error", message: error });
        }
    },

    put: async (req, res) => {

        try {
        
            const { nota_titulo, nota_informacao, nota_ultima_edicao, usuario_id ,} = req.body;
        // Validação (titulo,informacao,ultimo edicao)
            const { id } = req.params;
            const sql = "UPDATE notas SET nota_titulo = ?, nota_informacao = ?,nota_ultima_edicao = ?, usuario_id = ? WHERE nota_id = ?"
            const [rows] = await conn.query(sql, [nota_titulo,nota_informacao,nota_ultima_edicao, usuario_id , id]);
            res.json({ data: rows });

        } catch (error) {
        
            res.json({ status: "error", message: error });
        }
    }
};

module.exports = notasControl;
