//Creating basic server
const http = require('http');

//Create server object
http.createServer((req, res) => {
  //Write response
  res.write('Hello World'); //the output shows in the browser
  res.end();
}).listen(5000, () => //to run, set the port
  console.log('Server runnning'));