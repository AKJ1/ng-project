app.controller('TopBarCtrl', ['$scope', '$rootScope', '$location', 'AuthenticateService', function ($scope,$rootScope,$location,AuthenticateService) {
	$scope.username = "";
	$scope.password = "";
	
	
	$scope.$on('AuthenticationUser', function(event, params){
		console.log(params);
		$scope.loggedUser = params.newvalue;
		$scope.redirectToHome();
	});
	$scope.$on('AuthenticationAdmin', function(event, params){
		$scope.adminControls = params.newvalue;
		$scope.browseLocation = $scope.browseAds();
	});

	$scope.redirectToHome = function(){
		$location.path($scope.browseLocation);
	};
	$scope.browseAds = function(){
		if ($scope.adminControls) {
			return "/#/admin/ads";
		}
		return "/#/";
	};
	
	$scope.logout = function(){
		AuthenticateService.logout();
		delete($scope.loggedUser);
	};
	AuthenticateService.broadcastAdmin();
	AuthenticateService.broadcastUser();
	$scope.browseLocation = $scope.browseAds();
}]);