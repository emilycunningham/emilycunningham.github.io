angular.module('myApp', ['ngRoute','ngTouch','ui.bootstrap'])

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/questions', {
        redirectTo: '/questions/q0'
      })
      .when('/questions/:qId', {
        templateUrl: 'questions.html',
        controller: 'PickerCtrl'
      })
      .when('/homes/:homeId', {
        templateUrl: 'homes.html',
        controller: 'HomeCtrl'
      })
      .when('/homes', {
        redirectTo: '/homes/0'
      })
      .when('/contact', {
        templateUrl: 'contact.html'
      })
      .otherwise({
        redirectTo: '/questions'
      });
  }
])

.controller('PickerCtrl', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
  $http.get('options.json').success(function(data) {
    $scope.options = data;
    //$scope.reset();
    $scope.q = $scope.options[$routeParams.qId];
  });
  $scope.pickOption = function(id,title,idx) {
    /*$scope.breadcrumbs.push({"link":id,"title":title});
    if(idx>-1){
      $scope.breadcrumbs.splice(idx+1);
    }*/
    idx = Object.keys($scope.options).indexOf(id);
    //console.log(idx);
    if (idx == -1) {
      $location.path(id);
    } else {
      $location.path("/questions/"+id);
      //$scope.q = $scope.options[id];
    }
  };
  $scope.reset = function() {
    $scope.q = $scope.options['q0'];
    //$scope.breadcrumbs = [{"link":"q0","title":"Start"}];
  };
}])

.controller('HomeCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('homes.json').success(function(data) {
    $scope.homes = data;
    $scope.home = $scope.homes[$routeParams.homeId];
  });
  $scope.homeId = function() {
    return $routeParams.homeId;
  };
  $scope.checkArray = function(obj) {
    return Array.isArray(obj);
  };
}]);
