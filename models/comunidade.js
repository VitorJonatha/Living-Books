const { Sequelize, sequelize } = require('./db')
const db = require('./db')

const Comunidade = db.sequelize.define('comunidade',{
    titulo:{
        type: db.Sequelize.STRING
    },
    descricao:{
        type: db.Sequelize.STRING
    },
    link:{
        type: db.Sequelize.STRING
    }

})
module.exports = Comunidade

//Comunidade.sync({force: true})