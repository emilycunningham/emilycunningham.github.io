var myApp = angular.module('myApp', ['ui.bootstrap']);

myApp.controller('PickerCtrl', function ($scope, $http) {
  $http.get('options.json').success(function(data) {
    $scope.data = data;
    $scope.reset();
  });
  $scope.pickOption = function(id,title,idx) {
    $scope.q = $scope.data[id];
    $scope.breadcrumbs.push({"link":id,"title":title});
    if(idx>-1){
      $scope.breadcrumbs.splice(idx+1);
    }
  }
  $scope.reset = function() {
    $scope.q = $scope.data['q0'];
    $scope.breadcrumbs = [{"link":"q0","title":"Start"}];
  }
});
