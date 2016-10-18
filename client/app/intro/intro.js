angular.module('movieCatch.intro', [])

.controller('introController', function ($scope, Upcoming,Favorite,Details) {
  $scope.movie = [];
  $scope.movie = Details.list();

});
