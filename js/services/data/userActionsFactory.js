app.factory('UserActionsFactory', ['baseServiceUrl','$http',function (baseServiceUrl, $http) {
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
	factory.newUserAd = function(callback, title, text, categoryId, townId, imageDataUrl){
		var requestObject = {
			method: "POST",
			url: baseServiceUrl + 'user/ads/',
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
		$http(requestObject)
		.then(function(data){
			return callback(data);
		});
	};
	factory.getAdById = function(classifiedId){
		var requestObject = {
			headers: {
				'Authorization': 'Bearer ' + sessionStorage.loginToken
			},
		};
		$http.post(baseServiceUrl + 'user/ads/' + classifiedId, requestObject)
		.then(function(data){
			return(data);
		});
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
	factory.getUserProfile = function(callback){
		var requestObject = {
			headers: {
				'Authorization': 'Bearer ' + sessionStorage.loginToken
			}
		};
		$http.get(baseServiceUrl + 'user/profile', requestObject).then(function(response){
			return callback(response);
		});
	};
	factory.editUserProfile = function(callback, name, email, phonenumber, townid){
		var requestObject = {
			url: baseServiceUrl + 'user/profile',
			method: 'PUT',
			headers: {
				'Authorization': 'Bearer ' + sessionStorage.loginToken
			},
			data:{
				'name': name,
				'email': email,
				'phonenumber': phonenumber,
				'townid': townid
			}
		};
		$http(requestObject)
		.then(function(data){
			return callback(data);
		});
	};
	factory.changeUserPassword = function(callback, oldpass, newpass, repeatNewpass){
		var requestObject = {
			url: baseServiceUrl + 'user/changepassword',
			method: 'PUT',
			headers: {
				'Authorization': 'Bearer ' + sessionStorage.loginToken
			},
			data:{
				'oldPassword': oldpass,
				'newPassword': newpass,
				'confirmPassword': repeatNewpass,
			}
		};
		$http(requestObject)
		.then(function(data){
			return callback(data);
		});
	};


	return factory;
}]);