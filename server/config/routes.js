var upcomingMoviesController = require('../upcoming-movies/upcomingMoviesController.js');
var favoriteMoviesController = require('../favorite-movies/favoriteMoviesController.js');
var smsReminderController = require('../sms-reminder/smsReminderController.js');
var request = require('request');
var  API = require('../config/api-services.js');

module.exports = function (app, express) {


  app.get('/',function(request, response){
    console.log('Server Alive');
    response.status(200).send('Server Alive');
  });

  // app.get upcoming movies
  app.get('/api/upcoming-movies', upcomingMoviesController.listMovies);

  // app.post add favorite movie
  app.post('/api/favorite', favoriteMoviesController.favoriteMovie);

  // app.get list of favorite movies
  app.get('/api/favorite', favoriteMoviesController.listMovies);

  // app.get drop favorites
  app.get('/api/favorite/drop', favoriteMoviesController.dropCollection);

  // app.post sms reminder
  app.post('/api/sms', smsReminderController.sendSMS);
};