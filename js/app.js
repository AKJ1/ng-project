'use strict'
var app = angular.module('adsApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'templates/public/home.html',
		controller: 'homeCtrl'
	})
	$routeProvider.when('/login', {
		templateUrl: 'templates/public/login.html',
		controller: 'loginCtrl'
	})
	$routeProvider.when('/register', {
		templateUrl: 'templates/public/register.html',
		controller: 'registerCtrl'
	})
	$routeProvider.otherwise({
		redirectTo: "/"
	})
}]);
