app.controller('homeCtrl', ['$scope', 'ClassifiedsFactory', 'TownsFactory', 'CategoriesFactory', function($scope, ClassifiedsFactory, TownsFactory, CategoriesFactory) {
	$scope.pageTitle = "HomePage";
	$scope.currentCategory = 0;
	$scope.currentTown = 0;
	$scope.currentPage = 1;

	TownsFactory.getTowns()
	.$promise
	.then(
		function(data) {				
			$scope.towns = data;
	});

	CategoriesFactory.getCategories()
	.$promise
	.then(
		function(data) {	
			$scope.categories = data;
	});

	$scope.getCategoryById = function(categoryId){
		for(var category in $scope.categories){
			if ($scope.categories[category].id == categoryId) {
				return $scope.categories[category];
			}
		}
	};
	$scope.getTownById = function(townId){
		for(var town in $scope.towns){
			if ($scope.towns[town].id == townId) {
				return $scope.towns[town];
			}
		}
	};

	$scope.changeCategory = function(categoryId){
        $scope.currentPage = 1;
       	$scope.currentCategory = categoryId;
       	$scope.filter();
	};
	$scope.changeTown = function(townId){
        $scope.currentPage = 1;
        $scope.currentTown = townId;
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
		ClassifiedsFactory.getAdsWithFilters($scope.currentCategory, $scope.currentTown, $scope.currentPage)
		.$promise
		.then(
			function(data){				
				$scope.classifieds = data;
			},
			function(error){
				console.log(error);
			});
	};	
	$scope.filter();
}]);