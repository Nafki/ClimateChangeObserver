const {DataTypes} = require("sequelize");
const db = require("../db")

const User = db.define("User", {
    username: {
        type: DataTypes.STRING(100),
        allowNull: false,
        require: false,
       
      },
      email: {
        type: DataTypes.STRING, 
        require: true,
        allowNull: false, 
        unique: true, 
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
        unique: true
      }
})




module.exports = User;