const express = require("express");
const app = express();
const cors = require('cors')
const db = require("./models");
require('dotenv').config();
const PORT = process.env.PORT || 3333;

app.use(cors())

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Relaçao One (Curso) to Many (Assunto)
db.Curso.hasMany(db.Assunto, {
    onDelete: 'CASCADE'
});
db.Assunto.belongsTo(db.Curso);

// Relaçao One (Assunto) to Many (Missao)
db.Assunto.hasMany(db.Missao, {
    onDelete: 'CASCADE'
});
db.Missao.belongsTo(db.Assunto);

// Rotas para cada tabela
const missaoRoute = require("./routes/missao");
app.use(missaoRoute);

const assuntoRoute = require("./routes/assunto");
app.use(assuntoRoute);

const cursoRoute = require("./routes/curso");
app.use(cursoRoute);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    })
});