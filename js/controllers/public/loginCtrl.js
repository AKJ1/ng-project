app.controller('loginCtrl', ['$scope', 'AuthenticateService', function($scope, AuthenticateService) {
	pageTitle = "Login";
	$scope.login = function(username, password){
		console.log(username);
		console.log(password);
		AuthenticateService.login(username,password);
	};
}]);
