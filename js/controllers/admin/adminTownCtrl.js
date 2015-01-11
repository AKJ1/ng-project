app.controller('adminTownCtrl', ['$scope', '$location', 'AdminActionsFactory', function($scope, $location, AdminActionsFactory){
	$scope.currentPage = 1;

	$scope.nextPage = function(){
		$scope.currentPage += 1;
		$scope.filter();
	};
	$scope.prevPage = function(){
		$scope.currentPage -= 1;
		$scope.filter();
	};
	$scope.filter = function(currentPage){
		AdminActionsFactory.getTowns(function(response){
			console.log(response);
			$scope.towns = response.data;
		}, $scope.currentPage);
	};
	$scope.deleteTown = function(town){
		AdminActionsFactory.deleteTown(function(response){
			console.log(response);
		}, town.id);
	};
	$scope.createTown = function(name){
		AdminActionsFactory.createTown(function(response){
			console.log(response);
		}, name);
	};
	$scope.editTown = function(town, newName){
		AdminActionsFactory.editTown(function(response){
			console.log(response);
		}, newName, town.id);
	};
	$scope.filter();
}]);