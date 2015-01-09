app.controller('publishAdCtrl', ['$scope', 'UserActionsFactory', 'TownsFactory','CategoriesFactory', function ($scope, UserActionsFactory, TownsFactory, CategoriesFactory) {
	
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

	$scope.fileNameChanged = function(changed){
		console.log(changed.files);
		
		var reader = new FileReader();		
		reader.onload = function(event){
			$scope.backgroundImg = event.target.result;
			$scope.$apply();
			console.log(event);
			$scope.image = event.target.result;
		};
		reader.readAsDataURL(changed.files[0]);
	};

	$scope.publishAd = function(){
		UserActionsFactory.newUserAd(function(result){
			console.log(result);
		}, $scope.title, $scope.text, $scope.categorySelect.id, $scope.townSelect.id, $scope.image);
	};

	TownsFactory.getTowns()
	.$promise
	.then(function(data){
		$scope.towns = data;
	});
	
	CategoriesFactory.getCategories()
	.$promise
	.then(
		function(data) {	
			$scope.categories = data;
	});

	$scope.getUserProfile();
}]);