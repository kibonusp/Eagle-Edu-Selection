const db = require("../models");

// Atualiza o percentage do assunto
const updateAssunto = (assuntoId, res) => {
    db.Missao.findAll({
        where: {
            AssuntoId: assuntoId
        }, 
        raw: true,
        attributes: ['completed']
    }).then(missoes => {
        console.log(missoes);
        const isCompleted = missao => missao.completed == 1;
        let completedMissoes = missoes.filter(missao => isCompleted(missao));
        console.log(completedMissoes);
        console.log(100*completedMissoes.length/missoes.length);
        db.Assunto.update(
            {
                percentage: 100*completedMissoes.length/missoes.length
            },
            {
                where: {id: assuntoId}
            }
        ).then(() => res.send("Success"));
    });
}

// Cria uma missão nova para um assunto
module.exports.newMissao = (req, res) => {
    db.Missao.create({
        text: req.body.text,
        completed: false,
        AssuntoId: parseInt(req.body.id)
    }).then(() => updateAssunto(req.body.id, res));
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
    console.log(req.body.completed == 'true');
    let completed = 

    db.Missao.update(
        {
            text: req.body.text,
            completed: req.body.completed == 'true'
        }, 
        {
            where: {
                AssuntoId: req.body.id,
                id: req.body.MissaoId
            }
        }
    ).then(() => updateAssunto(req.body.id, res));
}

// Deleta uma missão
module.exports.deleteMissao = (req, res) => {
    db.Missao.destroy({
        where: {
            AssuntoId: req.params.id,
            id: req.params.MissaoId
        }
    }).then(() => updateAssunto(req.params.id, res));
}