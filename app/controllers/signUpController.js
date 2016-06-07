/**
 * Created by Xiaoyu on 6/4/2016.
 */
angular.module('myApp').controller('signUpController', function($scope, $http, $location) {
    $scope.username = 'xiaoyu11@163.com';
                $scope.password = 'qxy123';
                $scope.password_confirmation = 'qxy123';

                $scope.request = {
                    method: 'post',
                    url: 'http://more-gold.com/user-api/public/index.php/api/account/create-user',
                    data: {
                        'grant_type': 'password',
                        'client_id': 'dqLWBDS924bAKf0elB',
                        'client_secret': 'aefxrpHksbgyzm4dyxoVcRyjJDcEoKjKchPP',
                        'username': $scope.username,
                        'password': $scope.password,
                        'password_confirmation': $scope.password_confirmation,
                        'role_id': 1
                    },
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    }
                };

                $scope.signup = function()
                {
                    $http($scope.request).then(
                        function onSuccess(response){
                            $location.path('/userInfo');
                        },
                        function onError(response){
                            $scope.errorMessage = response.data.message;
            }
        );
    }
});