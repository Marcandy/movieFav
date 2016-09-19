angular.module('movieFav').controller('popCtrl', function($scope, $state, mainServ) {

$scope.info = mainServ.savedInfo;

});
