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

const CreateUser = document.querySelector('.CreateUser')
CreateUser.addEventListener('submit', (e) => {
  e.preventDefault()
  const username = CreateUser.querySelector('.username').value
  const password = CreateUser.querySelector('.password').value
  post('/createUser', { username, password })
})
function post (path, data) {
  return window.fetch(path, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}

 server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
