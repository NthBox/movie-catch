// handles get, post for 3rd-party services
var request = require('request');
var Fav = require('./favoriteMoviesModel.js')

module.exports = {
  favoriteMovie: function(req, res){
    var movie = req.body.movie;
    console.log('In server favorite movie POST');
    console.log('movie', movie);
    // find existing
    // Add to db
    // var newFav = new Fav ({
    //     saved: [movie]
    // });

    // create new entry with new id
    var newFav = {
        saved: movie
    };
    Fav.create(newFav);

//    Fav.findByIdAndUpdate(

    // info._id,
    //     {$push: {"saved": movie}},
    //     {safe: true, upsert: true},
    //     function(err, model) {
    //         console.log(err);
    //     }
    // );
  },
  listMovies: function(req,res){
    Fav.find({}, function(err, movies) {
    console.log('db fav movies', movies);
    res.send(movies);
  });
  }
};
