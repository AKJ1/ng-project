app.factory('ClassifiedsFactory', ['$resource', 'baseServiceUrl', function($resource, baseServiceUrl){
	var resource = $resource(baseServiceUrl + 'ads');
	var factory = {};
	factory.getAds = function() {
		return resource.get();
	};
	return factory;
}]);