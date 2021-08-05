const express = require("express")
const router = express.Router();
const assuntoController = require("../controllers/assunto");

router.post("/curso/:id/assunto", assuntoController.newAssunto);

module.exports = router;