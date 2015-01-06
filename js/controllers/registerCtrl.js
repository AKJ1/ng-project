app.controller('registerCtrl', ['$scope','TownsFactory', function ($scope, TownsFactory) {
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

	};
}]);
