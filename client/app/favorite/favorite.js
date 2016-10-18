angular.module('movieCatch.favorite', [])

.controller('FavoriteController', function ($scope, Favorite, Details, SMS) {
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

  $scope.setSelectedMovie = function (){
    console.log('Selected Movie');
    $scope.selected = this.movie;
    var selectedMovie = $scope.selected;
    console.log($scope.selected);
    Details.setMovie(selectedMovie);
  };

  $scope.smsSelectedMovie = function (){
    console.log('Selected Movie');
    $scope.selected = this.movie;
    var selectedMovie = $scope.selected;
    console.log($scope.selected);
    SMS.send(selectedMovie);
  };
});
