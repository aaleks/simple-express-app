var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose'); 
var handlebars = require('express-handlebars');
var core = require('./config/core/main')

var db=require("./config/db")

// View templates
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


//static middelware test
var staticMiddleware = function(req, res, next) {
  	next();
};

app.use('/',staticMiddleware,express.static(__dirname + "/public"));

//api routes 
core.registerAPIRoutes(app,'../../src/controllers');

//api routes 
core.registerCustomRoutes(app,'../../src/controllers');
  
//TODO api middlewares bug
//core.registerMiddlewares(app,'../../src/middlewares');
  
var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Example app listening at port %s', port);
});

module.exports = server;
