/**
 * Created by Xiaoyu on 6/4/2016.
 */
angular.module('myApp').controller('signUpController', function($scope, $http, $location,config) {
    $scope.username = 'xiaoyu11@163.com';
                $scope.password = 'qxy123';
                $scope.password_confirmation = 'qxy123';

                $scope.request = {
                    method: 'post',
                    url: config.CREATE_URL,
                    data: {
                        'grant_type': 'password',
                        'client_id': config.CLIENT_ID,
                        'client_secret': config.CLIENT_SECRET,
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