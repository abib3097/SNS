const http = require('http');
 const hostname = '127.0.0.1';
const port = 3000;
var fs=require('fs');


var server=null;
fs.readFile('index.html', (err,data)=>{
if(err){
throw err;
}
 server = http.createServer((req, res) => {

res.statusCode = 200;
  res.writeHeader(200,{'Content-Type' : 'text/html'});
console.log(data);
res.write(data);
  res.end();
}).listen(port);

  
});
/*
const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyC-gKicseFd6TgJcT1IE3HixJqRxVaUsgA'
});
googleMapsClient.geocode({
  address: '1600 Amphitheatre Parkway, Mountain View, CA'
}, function(err, response) {
  if (!err) {
    console.log(response.json.results);
  }
if(err){
console.log('blah')
}
});
 */
 server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

