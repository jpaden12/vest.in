var app = angular.module('app', [ngRoute]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/",
            {
            templateUrl: "../web/index.html",
            controller: ""
            })
        .when("/news",
            {
                templateUrl: "../box-press/index.html",
                controller: ""
            })

});
