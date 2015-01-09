app.controller('TopBarCtrl', ['$scope', '$rootScope', 'AuthenticateService', function ($scope,$rootScope,AuthenticateService) {
	$scope.username = "";
	$scope.password = "";
	
	
	$scope.$on('AuthenticationUser', function(event, params){
		$scope.loggedUser = params.newvalue;
	});
	$scope.logout = function(){
		AuthenticateService.logout();
		delete($scope.loggedUser);
	};

	AuthenticateService.broadcastUser();
}]);