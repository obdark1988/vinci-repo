/**
 * Created by obdark on 6/3/16.
 */
angular.module('myApp').controller('loginController', function($scope, $http, $location, config) {
    $scope.username = 'xiaoyu11@163.com';
    $scope.password = 'qxy123';

    $scope.request = {
        method: 'post',
        url: config.AUTH_URL,
        data: {
            'grant_type': 'password',
            'client_id': config.CLIENT_ID,
            'client_secret': config.CLIENT_SECRET,
            'username': $scope.username,
            'password': $scope.password
        },
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    };

    $scope.login = function()
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