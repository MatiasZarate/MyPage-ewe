module.exports = function(sequelize, dataTypes){
    let alias = "meme";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        link: {
            type: dataTypes.STRING,
            allowNull: false
        }
    }
    let config = {
        tableName: "MEMESyFANARTS",
        timestamps: false
    }
    let meme = sequelize.define(alias, cols, config);
    return meme
}