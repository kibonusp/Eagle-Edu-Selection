module.exports = (sequelize, DataTypes) => {
    const Curso = sequelize.define("Curso", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Curso;
}