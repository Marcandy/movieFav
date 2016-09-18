angular.module('movieFav').controller('popularCtrl', function($scope, mainServ) {

  mainServ.getData()
      .then(function (movies) {
        $scope.movies = movies;
      });


});
