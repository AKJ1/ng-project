app.controller('userProfileCtrl', ['$scope', 'UserActionsFactory', 'TownsFactory', function ($scope, UserActionsFactory, TownsFactory) {
	
	$scope.getUserProfile = function(){
		UserActionsFactory.getUserProfile(function(data){

			var currentUserProfile = data.data;
			console.log(currentUserProfile);

			$scope.uname = currentUserProfile.name;
			$scope.email = currentUserProfile.email;
			$scope.phone = currentUserProfile.phoneNumber;
			$scope.selected = {'id': currentUserProfile.townId};
			console.log($scope.selected);
		});
	};

	$scope.getUserProfile();

	$scope.updateProfile = function(){
		UserActionsFactory.editUserProfile(
			(function(response){
				console.log(response);
				$scope.getUserProfile();
			}), $scope.uname, $scope.email, $scope.phone, $scope.selected.id);
	};
	$scope.updatePassword = function(){
		UserActionsFactory.changeUserPassword((function(response){
			console.log(response);
			$scope.oldPass = "";
			$scope.newPass = "";
			$scope.newPassRepeat = "";
		}),$scope.oldPass, $scope.newPass, $scope.newPassRepeat);
	};

	TownsFactory.getTowns().
	$promise.
	then(function(data){
		$scope.towns = data;
	});

}]);