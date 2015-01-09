'use strict'

var app = angular.module('adsApp', ['ngRoute', 'ngResource']);

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api/');

app.config(['$routeProvider', '$locationProvider', '$filterProvider', function($routeProvider, $locationProvider, $filterProvider){
    $routeProvider.
		when('/', { templateUrl: 'views/public/home.html', controller: 'homeCtrl'}).
		when('/login', { templateUrl: 'views/public/login.html', controller: 'loginCtrl'}).
		when('/register', {	templateUrl: 'views/public/register.html',	controller: 'registerCtrl'}).
		when('/user/ads', { templateUrl: 'views/user/userAds.html', controller: 'userAdsCtrl'}).
		when('/user/ads/publish', { templateUrl: 'views/user/publishNewAd.html', controller: 'publishAdCtrl'}).
		when('/user/profile', { templateUrl: 'views/user/userProfile.html', controller: 'userProfileCtrl'}).
		when('/logout', {redirectTo: '/'}).
		otherwise({ redirectTo: "/"	});
	// $locationProvider.html5Mode(true);
}]);

