var myApp = angular.module('myApp', ['ui.bootstrap']);
 
/*phonecatApp.controller('PhoneListCtrl', function ($scope) {
  $scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
  ];
});*/

function AlertDemoCtrl($scope) {
  $scope.alerts = [
    { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
    { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
  ];

  $scope.addAlert = function() {
    $scope.alerts.push({msg: "Another alert!"});
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };

}

//function PickerCtrl($scope,$http) {
myApp.controller('PickerCtrl', function ($scope, $http) {
  $scope.breadcrumbs = [{"link":"q0","title":"Start"}];
  $http.get('options.json').success(function(data) {
    $scope.q = data['q0'];
    $scope.data = data;
  });
  $scope.pickOption = function(id,title,idx) {
    $scope.q = $scope.data[id];
    $scope.breadcrumbs.push({"link":id,"title":title});
    if(idx>-1){
      $scope.breadcrumbs.splice(idx+1);
    }
  }
});
