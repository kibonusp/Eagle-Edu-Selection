const db = require("../models");

// Cria uma missão nova para um assunto
module.exports.newAssunto = (req, res) => {
    db.Assunto.create({
        name: req.body.name,
        percentage: parseInt(req.body.percentage),
        CursoId: parseInt(req.body.id)
    }).then(submitedMissao => res.send(submitedMissao));
}

// Retorna todos os assuntos de um determinado curso
module.exports.getAssuntos = (req, res) => {
    db.Assunto.findAll({
        where: {
            CursoId: req.params.id
        }
    }).then(assuntos => res.send(assuntos));
}

// Retorna um determinado assunto especificado pelo id
module.exports.getAssuntoById = (req, res) => {
    db.Assunto.findAll({
        where: {
            CursoId: req.params.id,
            id: req.params.AssuntoId
        }
    }).then(assunto => res.send(assunto));
}

// Atualiza o assunto
module.exports.updateAssunto = (req, res) => {
    db.Assunto.update(
        {
            name: req.body.name,
            percentage: parseInt(req.body.percentage)
        }, 
        {
            where: {
                CursoId: req.body.id,
                id: req.body.AssuntoId
            }
        }
    ).then(() => res.send("Success"));
}

// Deleta um assunto
module.exports.deleteAssunto = (req, res) => {
    db.Assunto.destroy({
        where: {
            CursoId: req.params.id,
            id: req.params.AssuntoId
        }
    }).then(() => res.send("Success"));
}