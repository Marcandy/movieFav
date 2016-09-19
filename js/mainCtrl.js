angular.module('movieFav').controller('mainCtrl', function($scope, $state, mainServ) {

  $scope.searchMovie = function(movieName) {
        mainServ.searchMovie(movieName)
            .then(function(result) {
            $scope.movies = result;
                $state.go('search');
              });
    }


});
