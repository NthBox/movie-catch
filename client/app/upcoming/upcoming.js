angular.module('movieCatch.upcoming', [])

.controller('UpcomingController', function ($scope, Upcoming,Favorite, Details) {
  $scope.movies = {};
  Upcoming.list()
    .then(function(movies){
      $scope.movies = movies;
    })
    .catch(function(error){
      console.error('error', error);
    });

  $scope.addSelectedMovie = function (){
    console.log('Selected Movie');
    $scope.selected = this.movie;
    var selectedMovie = $scope.selected;
    console.log(selectedMovie);

    Favorite.catchit(selectedMovie);

  };

  $scope.setSelectedMovie = function (){
    console.log('Selected Movie');
    $scope.selected = this.movie;
    var selectedMovie = $scope.selected;
    console.log($scope.selected);
    Details.setMovie(selectedMovie);
  };
});
