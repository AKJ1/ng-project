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
			$scope.filter();
		}, user.username);
	};
	$scope.editUser = function(user){
		if (!user.editForm) {
			user.editForm = true;
		}else{
			user.editForm = false;
		}
		$scope.editTarget = user.username;
	};
	$scope.commitChanges = function(user){
		AdminActionsFactory.editUserProfile(function(){

		}, $scope.editTarget, user.name, user.email, user.phoneNumber, user.town.id, user.isAdmin);
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