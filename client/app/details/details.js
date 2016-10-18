angular.module('movieCatch.details', [])

.controller('DetailsController', function ($scope, Upcoming,Favorite,Details,SMS) {
  $scope.movie = [];
  $scope.movie = Details.list();

  $scope.addSelectedMovie = function (){
    console.log('Selected Movie');
    $scope.selected = this.movie;
    var selectedMovie = $scope.selected;
    console.log(selectedMovie);

    Favorite.catchit(selectedMovie);

  };

  $scope.smsSelectedMovie = function (){
    console.log('Selected Movie');
    $scope.selected = this.movie;
    var selectedMovie = $scope.selected;
    console.log($scope.selected);
    SMS.send(selectedMovie);
  };

});
