const db = require("../models");

// Cria um curso novo
module.exports.newCurso = (req, res) => {
    db.Curso.create({
        name: req.body.name
    }).then(submitedCurso => res.send(submitedCurso));
}

// Retorna todos os cursos do banco de dados
module.exports.getCursos = (req, res) => {
    db.Curso.findAll().then(cursos => res.send(cursos));
}

// Retorna um determinado curso especificado pelo id
module.exports.getCursoById = (req, res) => {
    db.Curso.findByPk(req.params.id).then(curso => res.send(curso));
}

// Atualiza o nome do curso
module.exports.updateCurso = (req, res) => {
    db.Curso.update(
        {
            name: req.body.name
        }, 
        {
            where: {id: req.body.id}
        }
    ).then(() => res.send("Success"));
}

// Deleta um curso
module.exports.deleteCurso = (req, res) => {
    db.Curso.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => res.send("Success"));
}