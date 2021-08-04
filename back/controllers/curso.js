const db = require("../models");

// Retorna todos os cursos do banco de dados
module.exports.getCursos = (req, res) => {
    db.Curso.findAll().then(cursos => res.send(cursos));
}