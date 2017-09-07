(function () {
    'use strict';

    angular
        .module('app')
        .controller('AddressController', AddressController);

    AddressController.$inject = ['$scope'];
    function AddressController($scope) {
        $scope.residentAddress = {};
        $scope.mailingAddress = {};

        $scope.update = function(residentAddress) {
            if ($scope.sameAddress) {
                $scope.mailingAddress = angular.copy($scope.residentAddress);
            }
        };
    }

// var form-register = angular
//         .module('form-register', [])
//         .controller('AddressController', ['$scope', function($scope) {
//             $scope.residentAddress = {};
//             $scope.mailingAddress = {};

//             $scope.update = function(residentAddress) {
//                 $scope.mailingAddress = angular.copy($scope.residentAddress);
//         };
//     }]);
})();

// var form-register = angular
//         .module('form-register', []);
//         .controller('AddressController', function($scope) {

//             $scope.residentAddress = {};
//             $scope.mailingAddress = {};

//             $scope.update = function() {
//                 if ($scope.sameAddress) {
//                     $scope.mailingAddress = angular.copy($scope.residentAddress);
//                 }
//             }

//             $scope.$watch('mailingAddress', function(newValue) {
//                 if (newValue) {
//                     $scope.update();
//                 }
//             }, true);
//         });
