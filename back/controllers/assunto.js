const db = require("../models");

// Retorna todos os assuntos do banco de dados
module.exports.getAssuntos = (req, res) => {
    db.Assunto.findAll().then(assuntos => res.send(assuntos));
}