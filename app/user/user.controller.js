var volunteerApp = angular.module("volunteerApp", []);
                    
volunteerApp.controller("UserController", function($scope){

    $scope.newUser = {};
    $scope.clickedUser = {};

    $scope.saveUser = function(){
        $scope.users.push($scope.newUser);
        $scope.newUser = {};
    };

    $scope.selectUser = function(user){
        $scope.clickedUser = user;
    };

    $scope.updateUser = function(){
        
    };
});