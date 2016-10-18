angular.module('movieCatch.services', [])

.factory('Upcoming', function ($http) {
  var list = function(){
    return $http({
      method: 'GET',
      url: '/api/upcoming-movies'
    })
    .then(function(resp){
      return resp.data;
    });
  };

  return {list: list};

})
.factory('Favorite', function ($http) {
  var saved = [];
  // static post
  // var catchit = function(movie){
  //   saved.push(movie);
  //   console.log(saved);
  //   return saved;
  // };
  // db POST
  var catchit = function(movie){
    console.log('catchit', movie);
    return $http({
      method: 'POST',
      url: '/api/favorite',
      data: {movie:movie}
    })
    .then(function(resp){
      return resp.data;
    });
  };
  //for static
  // var list = function(){
  //   return saved;
  // };

  //for db
  var list = function(){
    return $http({
      method: 'GET',
      url: '/api/favorite'
    })
    .then(function(resp){
      var saved = []
      resp.data.forEach(function(movieObj){
        console.log(movieObj.saved[0]);
        saved.push(movieObj.saved[0]);
      });
      console.log(saved)
      return saved;
    });
  };
  return {catchit: catchit, list:list};

})
.factory('Details', function ($http) {
  var detailsData = {};
  var setMovie = function(movie){
    detailsData = movie;
    console.log(detailsData);
    return detailsData;
  };
  var list = function(){
    return detailsData;
  };
  return {setMovie:setMovie, list:list};
});


