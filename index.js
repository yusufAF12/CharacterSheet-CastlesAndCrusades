var express = require("express");
var app = express();
var server = require('http').Server(app);
var path = require('path');
//var conf = require('./config/conf.js');

//var characterData = {}

app.set('port', (process.env.PORT) || 5000);

app.use(express.static(path.join(__dirname, 'public/')));
app.use('/vue', express.static(path.join(__dirname, 'node_modules/vue/dist/')));
app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist/')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views/sheet.html')));

server.listen(app.get('port'), () => console.log("Server initiated and listening on port: " + app.get('port')));