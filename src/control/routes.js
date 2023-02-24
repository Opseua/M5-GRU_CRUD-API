// Modulos necessários
const express = require('express');
const bodyParser = require('body-parser').json();
const router = express.Router();

// Rota raiz emite mensagem de erro.
router.get("/", (req, res) => {
    res.json({
        status: "error",
        message: "Bad request"
    });
});

// Rotas para as requisições de 'usuarios'.
const usuariosControl = require('./usuariosControl');
router.get("/usuarios/", usuariosControl.getAll);
router.get("/usuarios/:id", usuariosControl.getOne);
router.post("/usuarios/", bodyParser, usuariosControl.post);
router.put("/usuarios/:id", bodyParser, usuariosControl.put);
router.delete("/usuarios/:id", usuariosControl.delete);

// Exporta o módulo
module.exports = router;


