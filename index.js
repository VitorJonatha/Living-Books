
var express = require ('express');
var app = express ();



app.use(express.static(__dirname + '/public'));


app.get ('/home', function(req, res){
    res.sendFile(__dirname + '/public/HTML/home.html');
});

app.get ('/acao', function(req, res){
    res.sendFile(__dirname + '/public/HTML/acao.html');
});

app.get ('/fantasia', function(req, res){
    res.sendFile(__dirname + '/public/HTML/fantasia.html');
});

app.get ('/terror', function(req, res){
    res.sendFile(__dirname + '/public/HTML/terror.html');
});

app.get ('/romance', function(req, res){
    res.sendFile(__dirname + '/public/HTML/romance.html');
});

app.get ('/misterio', function(req, res){
    res.sendFile(__dirname + '/public/HTML/misterio.html');
});

app.listen (8080,function(){
    console.log ('Servidor rodando na porta http://localhost:8080/fantasia');
});