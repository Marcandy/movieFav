angular.module('movieFav').service('mainServ', function ($http, $q) {
var page = 1;
var baseUrl= 'http://api.themoviedb.org/3/movie/popular?api_key=992bee131be669ca2f75ef3b62f31264&';

var searchUrl = 'http://api.themoviedb.org/3/search/movie?api_key=992bee131be669ca2f75ef3b62f31264&query=';




  this.searchMovie = function (movieName) {
    return $http.get(searchUrl + movieName)
    .then(function(search) {
      console.log(search);
      return search.data.results;
      
    })
  }

});
