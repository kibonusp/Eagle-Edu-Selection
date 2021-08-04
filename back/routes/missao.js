const express = require("express")
const router = express.Router();
const missaoController = require("../controllers/missao");

router.get("/missao", missaoController.getMissoes);

module.exports = router;