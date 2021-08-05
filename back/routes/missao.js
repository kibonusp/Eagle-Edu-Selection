const express = require("express")
const router = express.Router();
const missaoController = require("../controllers/missao");

router.post("/missao", missaoController.newMissao);
router.get("/assunto/:id/missao", missaoController.getMissoes);
router.get("/assunto/:id/missao/:MissaoId", missaoController.getMissaoById);
router.put("/missao", missaoController.updateMissao);
router.delete("/assunto/:id/missao/:MissaoId", missaoController.deleteMissao);

module.exports = router;