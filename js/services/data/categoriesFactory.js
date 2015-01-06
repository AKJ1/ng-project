app.factory('CategoriesFactory', ['$resource', 'baseServiceUrl', function($resource, baseServiceUrl){
	var resource = $resource(baseServiceUrl + 'categories');
	var factory = {};
	factory.getCategories = function() {
		var ads = resource.query();
		console.log(ads);
		return(ads);
	};
	return factory;
}]);