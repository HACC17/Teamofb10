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

    // angular
    //     .module('app', [])
    //     .controller('AddressController', ['$scope', function($scope) {
    //         $scope.residentAddress = {};
    //         $scope.mailingAddress = {};

    //         $scope.update = function(residentAddress) {
    //             $scope.mailingAddress = angular.copy($scope.residentAddress);
    //     };
    // }]);
})();
