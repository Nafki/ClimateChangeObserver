const Sequelize = require("sequelize");
//const sequelize = new Sequelize("postgres://postgres:1e0df3e201a84c4ead78b1036ae43735@localhost:5432/climateChangeObserver");


const sequelize = new Sequelize(process.env.DATABASE_URL || `postgresql://postgres:${encodeURIComponent(process.env.PASS)}@localhostclimateChangeObserver/>`,{
    dialect: 'postgres', 
    ssl: process.env.ENVIRONMENT === 'production'
})


module.exports = sequelize;
