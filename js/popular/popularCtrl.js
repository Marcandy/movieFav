angular.module('movieFav').controller('popularCtrl', function($scope, mainServ, $state) {

  mainServ.getData()
      .then(function (movies) {
        $scope.movies = movies;
      });

      $scope.viewData = function(movieId) {
        mainServ.getInfo(movieId)
          .then(function (info) {
            $scope.getVideo(movieId)
            console.log(info)
            mainServ.savedInfo = info
            $state.go('popup');

      })
    }

    $scope.getVideo = function(movieId) {
      mainServ.getVideo(movieId)
        .then(function (video) {
          console.log(video)
          mainServ.savedVideo = video;

    })
  }



});
