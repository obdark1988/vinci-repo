angular.module('myApp').config(['$routeProvider',
    function($routeProvider) {
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

    }
]);