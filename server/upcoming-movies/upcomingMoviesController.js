// handles get, post for 3rd-party services
var request = require('request');
var  API = require('../config/api-services.js');
module.exports = {
  listMovies: function(req, res){

    console.log('In server upcoming movie GET');
    request('https://api.themoviedb.org/3/movie/upcoming?api_key='
               + API.movieDB() + '&language=en-US', function (error, response, body) {
        if (!error && response.statusCode == 200) {
          list = JSON.parse(body);
          //console.log('list', list);
          res.json(list);
        };
    });
  }
};
