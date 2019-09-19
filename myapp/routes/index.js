var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var router = express.Router();
var bodyParser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override')
var cors = require('cors');

var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.get('/insert', function(req, res, next) {
	console.log('comeco')
	//define caminho do banco
var uri = "mongodb+srv://usuario:usuario@mongodbblackbook-zdqhv.azure.mongodb.net/test?retryWrites=true&w=majority"
  //cria conexao com o banco de dados
	MongoClient.connect(uri,{ useNewUrlParser: true }, function(err,client){const collection = client.db("test").collection("teste");
	console.log("connected");

	//Define os dados que serao inseridos no banco
	var ins={DataEntrada:"x",DataSaida:"x",HorarioEntrada:"x",HorarioSaida:"x",Prontuario:"x",TipoSaida:"x"};

	//CREATE
	collection.insertOne(ins, function(err,res){
	  console.log("data inserted");

	})
	res.json('data inserted')
	client.close();
	})
	
});

router.get('/delete', function(req, res, next) {
	//importa biblioteca mongodb
	var MongoClient = require('mongodb').MongoClient;

	//define caminho do banco
	var uri = "mongodb+srv://usuario:usuario@mongodbblackbook-zdqhv.azure.mongodb.net/test?retryWrites=true&w=majority"

	//cria conexao com o banco de dados
	MongoClient.connect(uri,{ useNewUrlParser: true }, function(err,client){const collection = client.db("test").collection("BlackBook");
	console.log("connected");


	//DELETE
	//Define a condicao do delete
	collection.deleteOne({DataEntrada:"oi"}, function(err,res){
	  console.log("data removed");
	})

	client.close();
	})
	res.render('nothing')
});

router.get('/update', function(req, res, next) {
	//importa biblioteca mongodb
	var MongoClient = require('mongodb').MongoClient;

	//define caminho do banco
	var uri = "mongodb+srv://usuario:usuario@mongodbblackbook-zdqhv.azure.mongodb.net/test?retryWrites=true&w=majority"

	//cria conexao com o banco de dados
	MongoClient.connect(uri,{ useNewUrlParser: true }, function(err,client){const collection = client.db("test").collection("BlackBook");
	console.log("connected");

	//UPDATE
	collection.updateOne({DataEntrada:"tchau"}, {$set:{DataEntrada:"adeus"}});


	client.close();
	});
	res.render('nothing')
});

router.get('/read', function(req, res, next) {
	//importa biblioteca mongodb
	var MongoClient = require('mongodb').MongoClient;

	//define caminho do banco
	var uri = "mongodb+srv://usuario:usuario@mongodbblackbook-zdqhv.azure.mongodb.net/test?retryWrites=true&w=majority"

	//cria conexao com o banco de dados
	MongoClient.connect(uri,{ useNewUrlParser: true }, function(err,client){const collection = client.db("test").collection("BlackBook");
	console.log("connected");

	//READ
	collection.findOne({DataEntrada:"777"}, function(err, item) {
	  console.log(item);

	});

	client.close();
	});
	res.render('nothing')
});

module.exports = router;
