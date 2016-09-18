angular.module('movieFav', ['ui.router', 'ui.bootstrap']).config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('popular', {
      url: '/',
      templateUrl: 'js/popular/popular.html',
      controller: 'popularCtrl'
    })
    .state('search', {
      url: '/search',
      templateUrl: 'js/search/movieSearch.html',
      controller: 'movieSearch'
    });

  $urlRouterProvider
    .otherwise('/');
});
