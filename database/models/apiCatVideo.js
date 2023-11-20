module.exports = function(sequelize, dataTypes){
    let alias = "video";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING,
            allowNull: false
        },
        link: {
            type: dataTypes.STRING,
            allowNull: false
        }
    }
    let config = {
        tableName: "videosGatos",
        timestamps: false
    }
    let video = sequelize.define(alias, cols, config);
    return video
}