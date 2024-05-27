const { DataTypes, Deferrable } = require("sequelize");
const { Store } = require("./Stores");

const Service = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ingredients: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    store_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}

module.exports = {
    Service
}