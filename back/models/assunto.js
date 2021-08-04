module.exports = (sequelize, DataTypes) => {
    const Assunto = sequelize.define("Assunto", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        porcentage: {
            type: DataTypes.DOUBLE
        },
        curso_id: {
            type: DataTypes.INTEGER
        }
    });
    
    return Assunto;
}