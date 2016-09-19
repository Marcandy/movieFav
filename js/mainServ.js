angular.module('movieFav').service('mainServ', function ($http, $q) {
var page = 1;
var baseUrl= 'http://api.themoviedb.org/3/movie/popular?api_key=992bee131be669ca2f75ef3b62f31264';

var searchUrl = 'http://api.themoviedb.org/3/search/movie?api_key=992bee131be669ca2f75ef3b62f31264&query=';

// this.savedInfo;

var details = 'http://api.themoviedb.org/3/movie/'
var api = '?api_key=992bee131be669ca2f75ef3b62f31264';

this.getData = function () {
    // var deferred = $q.defer();
       return $http.get(baseUrl)
          .then(function (response) {
            // console.log(response)
            // response.data.results.forEach(function(el, idx) {
         //   el.poster_path = 'http://image.tmdb.org/t/p/w500' + el.poster_path})
           return response.data.results;
          })
      }

  this.searchMovie = function (movieName) {
    return $http.get(searchUrl + movieName)
    .then(function(search) {

      return search.data.results;

    })
  }

  this.getInfo = function(movieId) {
    return $http.get(details + movieId + api)
    .then(function(info) {
      console.log(info.data);
      // this.savedInfo = info.data;
      return info.data;

    })
  }


});
