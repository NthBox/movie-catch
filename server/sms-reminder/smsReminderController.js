// handles get, post for 3rd-party services
var request = require('request');
var  API = require('../config/api-services.js');

// Twilio Credentials
var accountSid = API.twilioSid();
var authToken = API.twilioAuthToken();

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

module.exports = {
  sendSMS: function(req, res){
    var movie = req.body.movie;
    console.log('movie', movie);

    var posterUrl = 'https://image.tmdb.org/t/p/w300/' +  movie.poster_path;
    var movieTitle = movie.title;
    var releaseDate = movie.release_date;

    console.log('posterUrl', posterUrl, 'movieTitle', movieTitle, 'releaseDate', releaseDate);

    console.log('In sendSMS POST');
    client.messages.create({
      to: "+16022459516",
      from: "+16282222840",
      body: "Movie Catch: " + movieTitle + " showing starts on " + releaseDate + '!',
      mediaUrl: posterUrl,
    }, function(err, message) {
    console.log(message.sid);
    });
  }
};

