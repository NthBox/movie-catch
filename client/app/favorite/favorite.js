angular.module('movieCatch.favorite', [])

.controller('FavoriteController', function ($scope, Favorite) {
  $scope.movies = [];
  //for memory
  // $scope.movies = Favorite.list();

  //for db
  Favorite.list()
    .then(function(movies){

      // console.log(movies)
      $scope.movies = movies;
    })
    .catch(function(error){
      console.error('error', error);
    });

});
