var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');
var app = express();
var http = require('http')
var port = 8080;

var server = http.createServer(app);

app.use(express.static(path.join(__dirname, '/client')));
app.use(bodyParser.json());

server.listen(port, function () {
  console.log("server is running now at http://localhost:"+port);
});