const {DataTypes} = require("sequelize");
const db = require("../db");

const Comment= db.define("comment",{
  climate_id: {
    type: DataTypes.INTEGER,
    allowNull: false
 },
     user_id: {
         type: DataTypes.INTEGER,
         allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
     }
    })
module.exports = Comment;