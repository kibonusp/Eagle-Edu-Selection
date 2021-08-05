const db = require("../models");

// Cria um assunto novo para um curso
module.exports.newAssunto = (req, res) => {
    db.Assunto.create({
        name: req.body.name,
        percentage: parseInt(req.body.percentage),
        CursoId: parseInt(req.params.id)
    }).then(submitedAssunto => res.send(submitedAssunto));
}