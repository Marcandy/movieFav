angular.module('movieFav').service('mainServ', function($http, $q) {
    var page = 1;
    var baseUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=992bee131be669ca2f75ef3b62f31264';

    var searchUrl = 'https://api.themoviedb.org/3/search/movie?api_key=992bee131be669ca2f75ef3b62f31264&query=';

    var infoUrl = 'https://api.themoviedb.org/3/movie/';

    var topUrl = 'https://api.themoviedb.org/3/movie/top_rated';

    var upUrl = 'https://api.themoviedb.org/3/movie/upcoming';

    var api = '?api_key=992bee131be669ca2f75ef3b62f31264';

    this.savedInfo;
    this.savedVideo;

    this.getData = function() {
        // var deferred = $q.defer();
        return $http.get(baseUrl)
            .then(function(response) {
                // console.log(response)
                // response.data.results.forEach(function(el, idx) {
                //   el.poster_path = 'http://image.tmdb.org/t/p/w500' + el.poster_path})
                return response.data.results;
            })
    }

    this.searchMovie = function(movieName) {
        return $http.get(searchUrl + movieName)
            .then(function(search) {

                return search.data.results;

            })
    }

    this.getInfo = function(movieId) {
        return $http.get(infoUrl + movieId + api)
            .then(function(info) {
                console.log(info.data);
                // this.savedInfo = info.data;
                return info.data;

            })
    }
// could be useful to do getinfo with getvideos
    this.getVideo = function(movieId) {
        return $http.get(infoUrl + movieId + '/videos' + api)
            .then(function(video) {
                console.log(video.data);
                // this.savedInfo = info.data;
                return video.data.results;

            })
    }

    this.topRated = function() {
        return $http.get(topUrl + api)
            .then(function(response) {
                return response.data.results;
            })

    }

    this.upComing = function() {
        return $http.get(upUrl + api)
            .then(function(response) {
                return response.data.results;
            })

    }

});
