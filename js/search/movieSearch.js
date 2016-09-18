angular.module('movieFav').controller('movieSearch', function($scope, $state, mainServ) {

  $scope.searchMovie = function(movieName) {
        mainServ.searchMovie(movieName)
            .then(function(result) {
              $state.go('search');
                $scope.movies = result;
                console.log(result);

            });
    }

    // $scope.someFunction = function(movie.id){
    //   //modal ng-if value = !value
    //   mainServ.differentHttp baseurl + movie/ +
    // }

});
