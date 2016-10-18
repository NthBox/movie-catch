angular.module('movieCatch.details', [])

.controller('DetailsController', function ($scope, Upcoming,Favorite,Details) {
  $scope.movie = [];
  $scope.movie = Details.list();

});
