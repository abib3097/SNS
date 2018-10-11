const http = require('http');
 const hostname = '127.0.0.1';
const port = 3000;
 const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('This is Scotts SNS Home page\n');
});
const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyC-gKicseFd6TgJcT1IE3HixJqRxVaUsgA'
});

googleMapsClient.geocode({
  address: '1600 Amphitheatre Parkway, Mountain View, CA'
}, function(err, response) {
  if (!err) {
    console.log(response.json.results);
  }
});

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "ginger.umd.edu",
  user: "dbclass114",
  password: "OlQ7p9rP"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

 server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
