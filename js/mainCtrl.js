angular.module('movieFav').controller('mainCtrl', function ($scope, mainServ){

  // mainServ.getData()
  //   .then(function (movies) {
  //     $scope.movies = movies;
  //   });


  $scope.searchMovie = function (movieName) {
    mainServ.getMovie(movieName)
      .then(function(result) {
        $scope.movie = result;
      })
    }


});
