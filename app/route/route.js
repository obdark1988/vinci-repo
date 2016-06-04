angular.module('myApp').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/login', {
                templateUrl: 'views/loginForm.html',
                controller: 'loginController'
            });
    }
]);