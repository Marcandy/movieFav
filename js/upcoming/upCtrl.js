angular.module('movieFav').controller('upCtrl', function($scope, mainServ, $state) {

  mainServ.upComing()
      .then(function (movies) {
        $scope.movies = movies;
      });

      $scope.viewData = function(movieId) {
        $scope.getVideo(movieId)
        mainServ.getInfo(movieId)
          .then(function (info) {

            console.log(info)
            mainServ.savedInfo = info;

            $state.go('popup');

      })
    }

    $scope.getVideo = function(movieId) {
        mainServ.getVideo(movieId)
          .then(function (video) {

            console.log(video)
            mainServ.key = video;

            // $state.go('popup');

      })
  }




});
