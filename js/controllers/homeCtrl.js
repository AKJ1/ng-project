app.controller('homeCtrl', ['$scope', 'ClassifiedsFactory', 'TownsFactory', 'CategoriesFactory', function($scope, ClassifiedsFactory, TownsFactory, CategoriesFactory) {
	$scope.pageTitle = "HomePage";
	$scope.loggedUser = {"name" : "kek"};
	ClassifiedsFactory.getAds()
	.$promise
	.then(
	function(data){
        console.log(data);
        $scope.classifieds = data;
	}, 
	function(error){
	});
	TownsFactory.getTowns()
		.$promise
		.then(
			function(data) {				
				$scope.towns = data;
				console.log(data);
		});
	CategoriesFactory.getCategories()
	.$promise
	.then(
		function(data) {				
			$scope.categories = data;
			console.log(data);
	});
}]);