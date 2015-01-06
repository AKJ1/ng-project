app.factory('TownsFactory', ['$resource', 'baseServiceUrl', function($resource, baseServiceUrl){
	var resource = $resource(baseServiceUrl + "towns");
	var factory = {};
	factory.getTowns = function () {
		return resource.query();
	};
	return factory;
}]);