const express = require("express");
const app = express();
const db = require("./models");
require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const missaoRoute = require("./routes/missao");
const assuntoRoute = require("./routes/assunto");
const cursoRoute = require("./routes/curso");

app.use(missaoRoute);
app.use(assuntoRoute);
app.use(cursoRoute);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    })
});