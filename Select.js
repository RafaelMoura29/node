var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "blackbook",
	password: "BlackBook123",
	database: "blackbook"
});

con.connect(function(err){
	if(err) throw err;
	console.log("Connected");
	var sql = "select * from indicadores_entrada_saida"
	con.query(sql, function(err, result,fields){
		if(err) throw err;
		console.log(result);
	})
});