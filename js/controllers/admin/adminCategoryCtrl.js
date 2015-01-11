app.controller('adminCategoryCtrl', ['$scope', '$location', 'AdminActionsFactory', function($scope, $location, AdminActionsFactory){
	$scope.filter = function(currentPage){
		AdminActionsFactory.getCategories(function(response){
			console.log(response);
			$scope.categories = response.data;
		});
	};
	$scope.deleteCategory = function(category){
		AdminActionsFactory.deleteCategory(function(response){
			console.log(response);
		}, category.id);
	};
	$scope.createCategory = function(name){
		AdminActionsFactory.createCategory(function(response){
			console.log(response);
		}, name);
	};
	$scope.editCategory = function(category, newName){
		AdminActionsFactory.editCategory(function(response){
			console.log(response);
		}, newName, category.id);
	};
	$scope.filter();
}]);