const {DataTypes} = require("sequelize");
const db = require("../db");

const Climate = db.define("Climate",{
  
     user_id: {
         type: DataTypes.INTEGER,
         //allowNull: false
      },
    temperature: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },  
    precipitation: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    
    location: {
        type: DataTypes.STRING(100),
        allowNull: false,
    }
    
});

module.exports = Climate;