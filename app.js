const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
<<<<<<< HEAD
  res.end('This is our SNS Home page Dror\n');
=======
  res.end('Hello World\n');
>>>>>>> 202c0ff1d18da2176366abae98d63e7a93bb1c4b
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
<<<<<<< HEAD
});
=======
});


>>>>>>> 202c0ff1d18da2176366abae98d63e7a93bb1c4b