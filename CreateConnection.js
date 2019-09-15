//importa biblioteca mongodb
var MongoClient = require('mongodb').MongoClient;

//define caminho do banco
var uri = "mongodb+srv://usuario:usuario@mongodbblackbook-zdqhv.azure.mongodb.net/test?retryWrites=true&w=majority"

//cria conexao com o banco de dados
MongoClient.connect(uri,{ useNewUrlParser: true }, function(err,client){const collection = client.db("test").collection("BlackBook");
console.log("connected");

//fecha conexao com o banco de dados
//client.close();
});