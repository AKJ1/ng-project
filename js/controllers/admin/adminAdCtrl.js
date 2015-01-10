app.controller('adminAdCtrl', ['$scope', '$location', 'AdminActionsFactory','TownsFactory', 'CategoriesFactory', function($scope, $location, AdminActionsFactory, TownsFactory, CategoriesFactory){
	$scope.currentPage = 1;
	$scope.currentCategoryId = "";
	$scope.currentTownId = "";
	$scope.currentStatus = "";
	$scope.changeStatus = function(status){		
        $scope.currentPage = 1;
		$scope.currentStatus = status;
		$scope.filter();
	};
	$scope.changeCategory = function(category){
        $scope.currentPage = 1;
       	$scope.currentCategory = category.id;
       	$scope.filter();
	};
	$scope.changeTown = function(town){
        $scope.currentPage = 1;
        $scope.currentTown = town.id;
        $scope.filter();
	};
	$scope.nextPage = function(){
		$scope.currentPage += 1;
		$scope.filter();
	};
	$scope.prevPage = function(){
		$scope.currentPage -= 1;
		$scope.filter();
	};
	$scope.filter = function(){
		AdminActionsFactory.getAdminAds(
			function(response){
				console.log(response);
				$scope.classifieds = response.data;
			}, $scope.currentPage, $scope.currentStatus, $scope.currentCategoryId, $scope.currentTownId);
	};	
	$scope.states = ["Inactive", "WaitingApproval", "Published"];

	$scope.approveAd = function(classified){
		AdminActionsFactory.approveAd(function(response){
			console.log(response);
			$scope.filter();
		}, classified.id);
	};
	$scope.rejectAd = function(classified){
		AdminActionsFactory.rejectAd(function(response){
			console.log(response);
			$scope.filter();
		}, classified.id);
	};
	$scope.deleteAd = function(classified){
		AdminActionsFactory.deleteAd(function(response){
			console.log(response);
			classified = null;
			$scope.filter();
		}, classified.id);
	};

	$scope.editAd = function(classified){
		classified.editor = true;
	};	
	$scope.commitChanges = function(classified){
		AdminActionsFactory.editAd(function(result){
			console.log(result);
			$scope.filter();
		}, classified.title, classified.text, classified.categorySelect.id, classified.townSelect.id, ($scope.image !== null && $scope.image !== undefined), $scope.image, classified.id);
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

	$scope.filter();
}]);