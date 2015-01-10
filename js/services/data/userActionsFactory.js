app.factory('UserActionsFactory', ['baseServiceUrl','$http',function (baseServiceUrl, $http) {
	var factory = {};

	factory.getUserAds = function(callback, page){
		var requestObject = {
			headers: {
				'Authorization': 'Bearer ' + sessionStorage.loginToken
			},
			params: {
				'pagesize': 6,
				'startpage': page
			}
		};
		$http.get(baseServiceUrl + "user/ads", requestObject)
		.then(function(response){
			return callback(response);	
		});
	};
	factory.deactivateUserAd = function(callback, classifiedId){
		var requestObject = {
			method: 'PUT',
			url: baseServiceUrl + 'user/ads/deactivate/' + classifiedId,
			headers: {
				'Authorization': 'Bearer ' + sessionStorage.loginToken
			}
		};
		$http(requestObject)
		.then(function(data){
			return callback(data);
		});
	};
	factory.deleteUserAd = function(callback, classifiedId){
		var requestObject = {
			method: "DELETE",
			url: baseServiceUrl + 'user/ads/' + classifiedId,
			headers: {
				'Authorization': 'Bearer ' + sessionStorage.loginToken
			}
		};
		$http(requestObject)
		.then(function(data){
			return callback(data);
		});
	};
	factory.reactivateUserAd = function(callback, classifiedId){
		var requestObject = {
			method: 'PUT',
			url: baseServiceUrl + 'user/ads/publishagain/' + classifiedId,
			headers: {
				'Authorization': 'Bearer ' + sessionStorage.loginToken
			}
		};
		$http(requestObject)
		.then(function(data){
			return callback(data);
		});
	};
	factory.editUserAd = function(callback,title,text,categoryId,townId,changeImage,imageDataUrl,classifiedId){
		var requestObject = {
			method: 'PUT',
			url: baseServiceUrl + 'user/ads/' + classifiedId,
			
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
		$http(requestObject)
		.then(function(data){
			return callback(data);
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