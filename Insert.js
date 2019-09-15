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
	var sql = "insert into indicadores_entrada_saida (DataEntrada, DataSaida, HorarioEntrada,HorarioSaida,Prontuario,Tipo) values ('29/03/2000','08/09/2019','20:30','13:30','123456', 'Óbito')"
	con.query(sql, function(err, result){
		if(err) throw err;
		console.log("1 record inserted");
	})
});