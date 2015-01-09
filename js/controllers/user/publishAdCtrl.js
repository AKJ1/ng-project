app.controller('updateUserCtrl', ['$scope', 'UserActionsFactory', 'TownsFactory', function ($scope, UserActionsFactory, TownsFactory) {
	
	$scope.currentUserProfile = $scope.getUserProfile();
	
	$scope.getUserProfile = function(){
		var gottenProfile = UserActionsFactory.getUserProfile();
		return gottenProfile;
	};

	TownsFactory.getTowns().
	$promise.
	done(function(data){
		$scope.towns = data;
	});

}]);