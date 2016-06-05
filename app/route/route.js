angular.module('myApp').config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.
            when('/login', {
                templateUrl: 'views/loginForm.html',
                controller: 'loginController'
            }).
            when('/signup', {
                templateUrl:'views/signupForm.html',
                controller:'signUpController'
            }).
            when('/userInfo', {
                templateUrl: 'views/userInfoForm.html',
                controller: 'userInfoController'
            }).
            otherwise({ redirectTo:'/'});

        //$locationProvider.html5Mode(true);
    }
]);