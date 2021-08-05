module.exports = (sequelize, DataTypes) => {
    const Assunto = sequelize.define("Assunto", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        percentage: {
            type: DataTypes.INTEGER
        }
    });
    
    return Assunto;
}