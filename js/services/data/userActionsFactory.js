app.factory('userActionFactory', ['baseServiceUrl','$http',function ($http) {
	var factory = {};

	factory.getUserAds = function(){
		var requestObject = {
			headers: {
				'Authorization': 'Bearer ' + sessionStorage.loginToken
			}
		};
		$http.get(baseServiceUrl + "user/ads", requestObject)
		.then(function(response){
			return response;	
		});
	};
	factory.deactivateUserAd = function(classifiedId){
		var requestObject = {
			headers: {
				'Authorization': 'Bearer ' + sessionStorage.loginToken
			}
		};
		$http.put(baseServiceUrl + 'user/ads/deactivate/' + classifiedId, requestObject)
		.then(function(data){
			return(data);
		});
	};
	factory.publishAgainUserAd = function(classifiedId){
		var requestObject = {
			headers: {
				'Authorization': 'Bearer ' + sessionStorage.loginToken
			}
		};
		$http.put(baseServiceUrl + 'user/ads/publishagain/' + classifiedId, requestObject)
		.then(function(data){
			return(data);
		});
	};
	factory.editUserAd = function(title,text,changeImage,imageDataUrl,categoryId,townId,classifiedId){
		var requestObject = {
			headers: {
				'Authorization': 'Bearer ' + sessionStorage.loginToken
			},
			data:{
				'title': title,
				'text': text,
				'changeimage': changeImage,
				'ImageDataURL': imageDataUrl,
				'categoryId': categoryId,
				'townId': townId
			}
		};
		$http.put(baseServiceUrl + 'user/ads/' + classifiedId, requestObject)
		.then(function(data){
			return(data);
		});
	};
	factory.newUserAd = function(title,text,changeImage,imageDataUrl,categoryId,townId,classifiedId){
		var requestObject = {
			headers: {
				'Authorization': 'Bearer ' + sessionStorage.loginToken
			},
			data:{
				'title': title,
				'text': text,
				'ImageDataURL': imageDataUrl,
				'categoryId': categoryId,
				'townId': townId
			}
		};
		$http.post(baseServiceUrl + 'user/ads/' + classifiedId, requestObject)
		.then(function(data){
			return(data);
		});
	};
	factory.getAdById = function(){

	};
	factory.deleteUserAd = function(classifiedId){
		var requestObject = {
			headers: {
				'Authorization': 'Bearer ' + sessionStorage.loginToken
			}
		};
		$http.delete(baseServiceUrl + 'user/ads/' + classifiedId, requestObject)
		.then(function(data){
			return(data);
		});
	};

	return factory;
}]);