angular.module('movieFav').controller('movieSearch', function($scope, $state, mainServ) {

  $scope.viewData = function(movieId) {
    mainServ.getInfo(movieId)
      .then(function (info) {
        console.log(info)

        mainServ.savedInfo = info;
        $state.go('popup');

  })
}
});
