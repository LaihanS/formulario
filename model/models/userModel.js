const Sequelize = require("sequelize")

const sequelize = require("../database")

const user = sequelize.define("Usuario",{
id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
},

nombre:{
    type: Sequelize.STRING,
    allowNull: true
},


email:{
    type: Sequelize.STRING,
    allowNull: true
}, 


telefono:{
    type: Sequelize.STRING,
    allowNull: true
}, 


imagepath:{
    type: Sequelize.STRING,
    allowNull: true
}


})

module.exports = user;