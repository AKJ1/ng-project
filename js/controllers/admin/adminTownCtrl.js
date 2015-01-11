app.controller('adminTownCtrl', ['$scope', '$location', 'AdminActionsFactory', function($scope, $location, AdminActionsFactory){

	AdminActionsFactory.getTowns(function(response){
		console.log(response);
		$scope.towns = response.data.towns;
	});
}]);