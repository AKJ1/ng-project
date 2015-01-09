app.controller('registerCtrl', ['$scope','TownsFactory', 'AuthenticateService', function ($scope, TownsFactory, AuthenticateService) {
	$scope.pageTitle = "Register";
	$scope.getTowns = function(){
		TownsFactory.getTowns()
		.$promise
		.then(
			function(data) {				
				$scope.towns = data;
				$scope.selected = $scope.towns[0];
				console.log(data);
		});
	};

	$scope.register = function(){
		AuthenticateService.registerUser($scope.user,$scope.pass, $scope.passTwo, $scope.uname, $scope.email, $scope.phone, $scope.townId);
	};
}]);
