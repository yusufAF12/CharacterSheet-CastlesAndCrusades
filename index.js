var express = require("express");
var app = express();
var server = require('http').Server(app);
var path = require('path');
var conf = require('./config/conf.js');

var characterData = {}

app.set('port', (process.env.PORT) || 5000 );

app.use(express.static(path.join(__dirname, 'public/')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views/sheet.html')) );

server.listen(app.get('port'), () => console.log("Server initiated and listening on port: " + app.get('port') ) );