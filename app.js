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

var gmAPI = new GoogleMapsAPI();
var params = {
  center: '444 W Main St Lock Haven PA',
  zoom: 15,
  size: '500x400',
  maptype: 'roadmap',
  markers: [
    {
      location: '300 W Main St Lock Haven, PA',
      label   : 'A',
      color   : 'green',
      shadow  : true
    },
    {
      location: '444 W Main St Lock Haven, PA',
      icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_icon&chld=cafe%7C996600'
    }
  ],
  style: [
    {
      feature: 'road',
      element: 'all',
      rules: {
        hue: '0x00ff00'
      }
    }
  ],
  path: [
    {
      color: '0x0000ff',
      weight: '5',
      points: [
        '41.139817,-77.454439',
        '41.138621,-77.451596'
      ]
    }
  ]
};
gmAPI.staticMap(params); // return static map URL
gmAPI.staticMap(params, function(err, binaryImage) {
  // fetch asynchronously the binary image
});





 server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
