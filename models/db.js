const Sequelize = require('sequelize')

//Fazendo conexão com o banco de dados
const sequelize = new Sequelize('livingbooks','root','root',{
    host: "localhost",
    dialect: 'mysql',
    query:{raw:true}
})

module.exports = {
    Sequelize: Sequelize,
    sequelize:sequelize 
}
