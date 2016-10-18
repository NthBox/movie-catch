var express = require('express');
var mongoose = require('mongoose');

var app = express();

// server init
var serverPort = 8080 ;

//Connect to mongoDB via Mongoose
mongoose.connect('mongodb://localhost/movieCatch');

//Connect to middleware
var middleware = require('./config/middleware.js');
middleware(app, express);

// //Connect to routes
var routes = require('./config/routes.js');
routes(app, express);


//local
app.listen(serverPort);
console.log('Listing on localhost:' + serverPort);

// Start Server Heroku
// app.listen(process.env.PORT, function(){
//   console.log('listening on');
// });

module.exports = app;