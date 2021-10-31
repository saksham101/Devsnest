const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

const Artist = sequelize.define(
  "Artist",
  {
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Nationality: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Gender: {
      type: DataTypes.STRING,
    },
    "Birth Year": {
      type: DataTypes.STRING,
    },
    "Death Year": {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    indexes: [
      {
        name: "Artist_trigrm",
        concurrently: true,
        using: "GIN",
        fields: [sequelize.literal('"Name" gin_trgm_ops')],
      },
    ],
  }
);

module.exports = Artist;