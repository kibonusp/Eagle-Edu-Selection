const express = require("express")
const router = express.Router();
const assuntoController = require("../controllers/assunto");

router.get("/assunto", assuntoController.getAssuntos);

module.exports = router;