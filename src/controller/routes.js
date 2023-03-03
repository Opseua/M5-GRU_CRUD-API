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

// Rotas para as requisições de 'notas'.
const notasControl = require('./notasControl');
router.get("/notas/", notasControl.getAll);
router.get("/notas/:id", notasControl.getOne);
router.post("/notas/", bodyParser, notasControl.post);
router.put("/notas/:id", bodyParser, notasControl.put);
router.delete("/notas/:id", notasControl.delete);

// Rotas para as requisições de 'perguntas'.
const perguntasControl = require('./perguntasControl');
router.get("/perguntas/", perguntasControl.getAll);
router.get("/perguntas/:id", perguntasControl.getOne);
router.post("/perguntas/", bodyParser, perguntasControl.post);
router.put("/perguntas/:id", bodyParser, perguntasControl.put);
router.delete("/perguntas/:id", perguntasControl.delete);

// Rotas para as requisições de 'comunicados'.
const comunicadosControl = require('./comunicadosControl');
router.get("/comunicados/", comunicadosControl.getAll);
router.get("/comunicados/:id", comunicadosControl.getOne);
router.post("/comunicados/", bodyParser, comunicadosControl.post);
router.put("/comunicados/:id", bodyParser, comunicadosControl.put);
router.delete("/comunicados/:id", comunicadosControl.delete);

// Rotas para as requisições de 'sobre'.
const sobreControl = require('./sobreControl');
router.get("/adm/sobre/", sobreControl.getAll);
router.get("/adm/sobre/:id", sobreControl.getOne);
router.post("/adm/sobre/", bodyParser, sobreControl.post);
router.put("/adm/sobre/:id", bodyParser, sobreControl.put);
router.delete("/adm/sobre/:id", sobreControl.delete);

// Rotas para as requisições de 'funcionalidades'.
const funcionalidadesControl = require('./funcionalidadesControl');
router.get("/adm/funcionalidades/", funcionalidadesControl.getAll);
router.get("/adm/funcionalidades/:id", funcionalidadesControl.getOne);
router.post("/adm/funcionalidades/", bodyParser, funcionalidadesControl.post);
router.put("/adm/funcionalidades/:id", bodyParser, funcionalidadesControl.put);
router.delete("/adm/funcionalidades/:id", funcionalidadesControl.delete);

// Exporta o módulo
module.exports = router;


