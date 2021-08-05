const db = require("../models");

// Cria uma missão nova para um assunto
module.exports.newMissao = (req, res) => {
    db.Missao.create({
        text: req.body.text,
        completed: false,
        AssuntoId: parseInt(req.body.id)
    }).then(submitedMissao => res.send(submitedMissao));
}

// Retorna todas as missões de um determinado assunto
module.exports.getMissoes = (req, res) => {
    db.Missao.findAll({
        where: {
            AssuntoId: req.params.id
        }
    }).then(missoes => res.send(missoes));
}

// Retorna uma determinada missão especificada pelo id
module.exports.getMissaoById = (req, res) => {
    db.Missao.findAll({
        where: {
            AssuntoId: req.params.id,
            id: req.params.MissaoId
        }
    }).then(missao => res.send(missao));
}

// Atualiza uma missão
module.exports.updateMissao = (req, res) => {
    db.Missao.update(
        {
            text: req.body.text,
            completed: req.body.completed === 'true'
        }, 
        {
            where: {
                AssuntoId: req.body.id,
                id: req.body.MissaoId
            }
        }
    ).then(() => res.send("Success"));
}

// Deleta uma missão
module.exports.deleteMissao = (req, res) => {
    db.Missao.destroy({
        where: {
            AssuntoId: req.params.id,
            id: req.params.MissaoId
        }
    }).then(() => res.send("Success"));
}