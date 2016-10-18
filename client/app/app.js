angular.module('movieCatch', [
  'movieCatch.services',
  'movieCatch.upcoming',
  'movieCatch.favorite',
  'movieCatch.details',
  'movieCatch.index',
  'movieCatch.intro',
  'ui.bootstrap',
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/upcoming', {
      templateUrl: 'app/upcoming/upcoming.html',
      controller: 'UpcomingController'
    })
    .when('/', {
      templateUrl: 'app/intro/intro.html',
      controller: 'introController',
    })
    .when('/favorite', {
      templateUrl: 'app/favorite/favorite.html',
      controller: 'FavoriteController',
    })
    .when('/details', {
      templateUrl: 'app/details/details.html',
      controller: 'DetailsController',
    })
    .when('/intro', {
      templateUrl: 'app/intro/intro.html',
      controller: 'introController',
    })
    .otherwise('/', {
      templateUrl: 'app/upcoming/upcoming.html',
      controller: 'UpcomingController'
    });
});

