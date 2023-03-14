const express = require('express');
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Comunidade = require('./models/comunidade')

//Config
//Template Engine
app.engine('handlebars',handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
//Body Parser
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
//Rotas Inicial
app.get('/',function(req,res){
    Comunidade.findAll({order: [['id','DESC']]}).then(function(comunidade){
        res.render('LivrosDaComunidade', { comunidade: comunidade })
    })
})
//Rota do formulário
app.get('/form',function (req,res) {
    res.render('LivrosDaComunidade.handlebars')
})
//rotas "post" só pode ser acessada quando alguem faz uma requisição
app.post('/add',function(req,res){
    Comunidade.create({
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        link: req.body.link
        }).then(function(){
            res.redirect('/')
    }).catch(function(erro){
        res.send("Comentário não pode ser criado" + erro)
    })
})
//Rota para deletar Comentários
app.get('/deletar/:id',function(req,res){
    Comunidade.destroy({where:{'id':req.params.id}}).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send('Ocorreu um erro')
    })
})
    
app.listen(8081, function () {
    console.log("Servidor rodando na porta http://localhost:8081/");
});