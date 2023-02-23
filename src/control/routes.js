const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();

router.get("/", (req, res) => {
    res.json({
        status: "error",
        message: "Bad request"
    });
});

const notasControl = require('./notasControl');

router.get("/notas/", notasControl.getAll);
router.get("/notas/:id", notasControl.getOne);
router.post("/notas/", bodyParser, notasControl.post);
router.put("/notas/:id", bodyParser, notasControl.put);
router.delete("/notas/:id", notasControl.delete);

module.exports = router;

