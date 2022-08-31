const { DataTypes } = require("sequelize");
const { sequelize } = require("../database");

const Moovie = sequelize.define("Moovie", {
    title: {
        type: DataTypes.STRING,
        //unique: true,
        allowNull: false,
    },
    year: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    link: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
});

module.exports = {
    Moovie,
};
