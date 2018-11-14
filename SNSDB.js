var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "kadror",
  password: "Burtmmd16!"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});