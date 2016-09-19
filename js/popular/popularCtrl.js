angular.module('movieFav').controller('popularCtrl', function($scope, mainServ, $state) {

  mainServ.getData()
      .then(function (movies) {
        $scope.movies = movies;
      });

      $scope.viewData = function(movieId) {
        mainServ.getInfo(movieId)
          .then(function (info) {
            console.log(info)
            mainServ.savedInfo = info
            $state.go('popup');
      })
    }



});
