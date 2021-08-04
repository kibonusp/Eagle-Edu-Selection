const express = require("express")
const router = express.Router();
const cursoController = require("../controllers/curso");

router.get("/curso", cursoController.getCursos);

module.exports = router;