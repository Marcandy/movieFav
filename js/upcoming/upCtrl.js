angular.module('movieFav').controller('upCtrl', function($scope, mainServ, $state) {

  mainServ.upComing()
      .then(function (movies) {
        $scope.movies = movies;
      });

      $scope.viewData = function(movieId) {
        mainServ.getInfo(movieId)
          .then(function (info) {
            console.log(info)
            mainServ.savedInfo = info;
            $state.go('popup');
      })
    }



});
