angular.module('listApp', [])
    .controller('listController', function($scope){
        $scope.lists = [];
        $scope.create = function() {
            $scope.lists.push($scope.text);
            $scope.text = '';
        }
    });