// (function () {
//     'use strict';

//     angular
//         .module('app')
//         .controller('UserController', UserController);

//     UserController.$inject = ['UserService', '$rootScope'];
//     function UserController(UserService, $rootScope) {
//         var vm = this;

//         vm.user = null;
//         vm.allUsers = [];
//         vm.deleteUser = deleteUser;

//         initController();

//         function initController() {
//             loadCurrentUser();
//             loadAllUsers();
//         }

//         function loadCurrentUser() {
//             UserService.GetByUsername($rootScope.globals.currentUser.username)
//                 .then(function (user) {
//                     vm.user = user;
//                 });
//         }

//         function loadAllUsers() {
//             UserService.GetAll()
//                 .then(function (users) {
//                     vm.allUsers = users;
//                 });
//         }

//         function deleteUser(id) {
//             UserService.Delete(id)
//             .then(function () {
//                 loadAllUsers();
//             });
//         }
//     }

// })();

var app = angular
            .module("app", [])
            .controller("UserController", function($scope){
                console.log("User Controller...");

                $scope.newUser = {};

                $scope.users = [
                    {firstName: "Otes", lastName: "Wang", username: "Otes", email: "otes@yourdomain.com", role: "volunteer"}
                ];

                $scope.saveUser = function(){
                    console.log($scope.newUser);

                    $scope.users.push($scope.newUser);
                };
            });