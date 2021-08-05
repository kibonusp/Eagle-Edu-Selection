const express = require("express")
const router = express.Router();
const cursoController = require("../controllers/curso");

router.post("/curso", cursoController.newCurso);
router.get("/curso", cursoController.getCursos);
router.get("/curso/:id", cursoController.getCursoById);
router.put("/curso", cursoController.updateCurso);
router.delete("/curso/:id", cursoController.deleteCurso);

module.exports = router;