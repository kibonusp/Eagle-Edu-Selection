module.exports = (sequelize, DataTypes) => {
    const Missao = sequelize.define("Missao", {
        text: {
            type: DataTypes.STRING,
            allowNull: false
        },
        completed: {
            type: DataTypes.BOOLEAN
        }
    });
    
    return Missao;
}