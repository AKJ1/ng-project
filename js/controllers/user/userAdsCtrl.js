app.controller('userAdsCtrl', ['$scope', 'UserActionsFactory', 'TownsFactory', 'CategoriesFactory', 'ClassifiedsFactory', function ($scope, UserActionsFactory, TownsFactory, CategoriesFactory, ClassifiedsFactory) {
	
	$scope.currentPage = 1;
	
	$scope.getUserProfile = function(){
		UserActionsFactory.getUserProfile(function(data){

			$scope.currentUserProfile = data;
		});
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


	$scope.getUserAds = function(){
		UserActionsFactory.getUserAds(function(data){
			console.log(data);
			$scope.classifieds = data.data;
		}, $scope.currentPage);
	};	
	$scope.nextPage = function(){
		$scope.currentPage += 1;
		$scope.getUserAds();
	};
	$scope.prevPage = function(){
		$scope.currentPage -= 1;
		$scope.getUserAds();
	};

	$scope.deactivateAd = function(classified){
		UserActionsFactory.deactivateUserAd(function(response){
			console.log(response);
		}, classified.id);
		classified.status = "Inactive";
	};
	$scope.reactivateAd = function(classified){
		UserActionsFactory.reactivateUserAd(function(response){
			console.log(response);
		}, classified.id);
		classified.status = "WaitingApproval";
	};
	$scope.deleteAd = function(classified){
		UserActionsFactory.deleteUserAd(function(response){
			console.log(response);
		}, classified.id);
		classified = null;
	};
	$scope.editAd = function(classified){
		classified.editor = true;
		
	};
	$scope.check = function(){
		alert(classified.searchText);
	}
	$scope.commitChanges = function(classified){
		UserActionsFactory.editUserAd(function(result){
			console.log(result);
		}, classified.title, classified.text, classified.categorySelect.id, classified.townSelect.id, ($scope.image!==null||$scope.image!==undefined), $scope.image, classified.id);
	};

	$scope.getUserProfile();
	$scope.getUserAds();
}]);