app.controller('homeCtrl', ['$scope', 'ClassifiedsFactory', 'TownsFactory', 'CategoriesFactory', function($scope, ClassifiedsFactory, TownsFactory, CategoriesFactory) {
	$scope.pageTitle = "HomePage";
	

	ClassifiedsFactory.getAds()
	.$promise
	.then(
	function(data){
        $scope.classifieds = data;
	});


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

	function filterByCategory(){
		console.log("filtering");
	}

	$scope.filterByCategory = function(category){
		console.log("filtering");
		$scope.classifieds = {};
		ClassifiedsFactory.getAdsByCategory(category)
		.$promise
		.then(
			function(data){
				$scope.classifieds = data;
			});
	};	
}]);