//importa biblioteca mongodb
var MongoClient = require('mongodb').MongoClient;

//define caminho do banco
var uri = "mongodb+srv://usuario:usuario@mongodbblackbook-zdqhv.azure.mongodb.net/test?retryWrites=true&w=majority"

//cria conexao com o banco de dados
MongoClient.connect(uri,{ useNewUrlParser: true }, function(err,client){const collection = client.db("test").collection("BlackBook");
console.log("connected");

//Define os dados que serao inseridos no banco
var ins={DataEntrada:"teste",DataSaida:"teste",HorarioEntrada:"teste",HorarioSaida:"teste",Prontuario:"",TipoSaida:"teste"};

//CREATE
collection.insertOne(ins, function(err,res){
  console.log("data inserted");
})

client.close();
})