angular.module('movieCatch.index', [])

.controller('IndexController', function($scope, Favorite) {
  var clearFavs = function(){
    console.log('clearFavs ctrl');
    Favorite.drop();
  }
});