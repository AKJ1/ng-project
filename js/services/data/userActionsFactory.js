app.factory('userActionFactory', ['baseServiceUrl','$http',function ($http) {
	var factory = {};

	factory.getUserAds = function(){
		var requestInfo = {
			headers: {
				'Authorization': 'Bearer ' + sessioNStorage.loginToken
			}
		};
		$http.get(baseServiceUrl + 'user/ads', requestInfo );
	};

	return factory;
}]);