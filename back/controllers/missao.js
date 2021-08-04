const db = require("../models");

// Retorna todas as missões do banco de dados
module.exports.getMissoes = (req, res) => {
    db.Missao.findAll().then(missoes => res.send(missoes));
}