app.factory('ClassifiedsFactory', ['$resource', 'baseServiceUrl', function($resource, baseServiceUrl){
	var adsUrl = baseServiceUrl + 'ads';
	var factory = {};
	factory.getAds = function() {
		var resource = $resource(adsUrl);
		return resource.get();
	};
	factory.getAdsByCategory = function(categoryId){
		var resource = $resource(adsUrl, {"categoryid": categoryId});
		return resource.query();
	};
	return factory;
}]);