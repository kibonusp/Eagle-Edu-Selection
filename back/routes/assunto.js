const express = require("express")
const router = express.Router();
const assuntoController = require("../controllers/assunto");

router.post("/assunto", assuntoController.newAssunto);
router.get("/curso/:id/assunto", assuntoController.getAssuntos);
router.get("/curso/:id/assunto/:AssuntoId", assuntoController.getAssuntoById);
router.put("/assunto", assuntoController.updateAssunto);
router.delete("/curso/:id/assunto/:AssuntoId", assuntoController.deleteAssunto);

module.exports = router;