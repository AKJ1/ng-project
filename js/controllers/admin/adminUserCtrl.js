app.controller('adminUserCtrl', ['$scope', '$location', 'TownsFactory', 'AdminActionsFactory', function($scope, $location, TownsFactory, AdminActionsFactory){
	TownsFactory.getTowns()
	.$promise
	.then(function(data){
		$scope.towns = data;
	});

	$scope.currentPage = 1;
	$scope.nextPage = function(){
		$scope.currentPage += 1;
		$scope.filter();
	};
	$scope.prevPage = function(){
		$scope.currentPage -= 1;
		$scope.filter();
	};
	$scope.deleteUser = function(user){
		AdminActionsFactory.deleteUser(function(response){
			console.log(response);
		}, user.name);
	};
	$scope.editUser = function(user){
		user.editForm = true;
	};
	$scope.commitChanges = function(user){
		AdminActionsFactory.editUserProfile(function(){

		}, user.username, user.name, user.email, user.phone, user.town, user.isAdmin);
	};
	$scope.changePassword = function(user){
		AdminActionsFactory.setUserPassword(function(){

		}, user.username, user.newPass, user.newPassRepeat);
	};
	$scope.filter = function(){
		AdminActionsFactory.getUsers(
		function(response){
			console.log(response);
			$scope.users = response.data;
		}, $scope.currentPage);
	};
	$scope.filter();
}]);