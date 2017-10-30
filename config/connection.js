var mysql = require("mysql");

//create database connection
if(process.env.JAWSDB_URL) {
	var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	var connection = mysql.createConnection({
		host: "localhost",
		port: 3306,
		user: "root",
		password: "",
		database: "burgers_db"
	});
}

connection.connect( err => {
	if(err) throw err;
	console.log("Connected to mysql");
})

module.exports = connection;