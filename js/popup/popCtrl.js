angular.module('movieFav').controller('popCtrl', function($scope, $state, mainServ, $sce) {

$scope.info = mainServ.savedInfo;
// $scope.video = mainServ.savedVideo[0].key;
 // you get many videos the first is usually the officail trailer
 $scope.key = mainServ.getKey();
$scope.url = $sce.trustAsResourceUrl('https:www.youtube.com/embed/' + $scope.key);
//need to make it trusted because of angular

});
