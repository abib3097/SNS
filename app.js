const http = require('http');
 const hostname = '127.0.0.1';
const port = 3000;
 const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('This is Scotts SNS Home page\n');
  <script async defer
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC-gKicseFd6TgJcT1IE3HixJqRxVaUsgA&callback=initMap">
    </script>
});
 server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
