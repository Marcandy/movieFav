angular.module('movieFav', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

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
    })
    .state('popup', {
      url: '/popup',
      templateUrl: 'js/popup/popup.html',
      controller: 'popCtrl'
    })
    .state('toprated', {
      url: '/toprated',
      templateUrl: 'js/toprated/toprated.html',
      controller: 'topCtrl'
    })
    .state('upcoming', {
      url: '/upcoming',
      templateUrl: 'js/upcoming/upcoming.html',
      controller: 'upCtrl'
    });




  $urlRouterProvider
    .otherwise('/');
});
