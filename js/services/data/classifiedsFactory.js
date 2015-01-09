app.factory('ClassifiedsFactory', ['$resource', 'baseServiceUrl', function($resource, baseServiceUrl){
	var adsUrl = baseServiceUrl + 'ads';
	var factory = {};
	factory.getAds = function() {
		var resource = $resource(adsUrl);
		return resource.get();
	};
	factory.getAdsWithFilters = function(categoryId, townId, page){
		var categoryFilter = categoryId ? "?categoryid=" + categoryId : "";
		var townFilter = townId ?(categoryId ? "&" : "?") + "townId=" + townId : ""; 
		var pageFilter = ((townId || categoryId) ? "&" : "?") + "startpage=" + page;
		var pageLengthFilter = "&pagesize=6";
		var resource = $resource(adsUrl + categoryFilter + townFilter + pageFilter + pageLengthFilter);
		return resource.get();
	};

	factory.postAd = function(title, text, imageDataUrl, categoryId, townId){

	};
	return factory;
}]);