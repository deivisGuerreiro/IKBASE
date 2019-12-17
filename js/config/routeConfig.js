angular.module('ikbaseApp').config(($routeProvider) => {
    $routeProvider.when('/login', {
        templateUrl: './view/Login/login.html',
        controller: 'loginController'
    });

    $routeProvider.when('/feed', {
        templateUrl: 'feed.html',
        controller: 'feedController'
    })
    $routeProvider.otherwise({ redirectTo: './view/Login/login.html' });
})