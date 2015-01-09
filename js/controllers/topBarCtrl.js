app.controller('TopBarCtrl', ['$scope' , '$rootScope', 'AuthenticateService', function ($scope,$rootScope,AuthenticateService) {
	$scope.username = "";
	$scope.password = "";
	
	
	$scope.$on('AuthenticationUser', function(event, params){
		$scope.loggedUser = params.newvalue;
		console.log('kek');
	});
	$scope.logout = function(){
		AuthenticateService.logout();
		delete($scope.loggedUser);
	};

	//TODO: Move to init
	$rootScope.$broadcast('AuthenticationUser', {key: 'user', newvalue: sessionStorage.username});
	$rootScope.$broadcast('AuthenticationToken', {key: 'token', newvalue: sessionStorage.loginToken});
}]);