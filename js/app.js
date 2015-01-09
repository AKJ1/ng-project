'use strict'

var app = angular.module('adsApp', ['ngRoute', 'ngResource']);

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api/');

app.config(['$routeProvider', '$locationProvider', '$filterProvider', function($routeProvider, $locationProvider, $filterProvider){
    $routeProvider.
		when('/', { templateUrl: 'views/home.html', controller: 'homeCtrl'	}).
		when('/login', { templateUrl: 'views/login.html', controller: 'loginCtrl' }).
		when('/register', {	templateUrl: 'views/register.html',	controller: 'registerCtrl' }).
		otherwise({ redirectTo: "/"	});
	// $locationProvider.html5Mode(true);
}]);

