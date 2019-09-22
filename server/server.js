var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override')
var cors = require('cors');
var MongoClient = require('mongodb').MongoClient;
var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

app.post('/CreateUnidade', function(req, res){
    
    //define caminho do banco
    var uri = "mongodb+srv://usuario:usuario@mongodbblackbook-zdqhv.azure.mongodb.net/test?retryWrites=true&w=majority"

    //cria conexao com o banco de dados
    MongoClient.connect(uri,{ useNewUrlParser: true }, function(err,client){const collection = client.db("test").collection("unidade");
    console.log("connected");

    //Define os dados que serao inseridos no banco
    var ins={Codigo: req.body.codigo, Nome: req.body.nome, Senha: req.body.senha};

    //CREATE
    collection.insertOne(ins, function(err,res){
      console.log("data inserted");
    })

    client.close();
    })

    res.send({
        passed: true,
    });

});

app.get('/checkname/:name', function(req, res){

    if(req.params.name.toLowerCase() === 'homer'){

        res.status(401).send({message: 'Sorry, no Homer\'s!'});

    } else {

        res.json('Welcome!');

    }

});

app.listen(process.env.PORT || 8080);