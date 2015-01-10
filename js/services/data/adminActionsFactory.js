app.factory('AdminActionsFactory', [function () {

	var factory = {};
	factory.getAdminAds = function(callback, page, status){
		var requestObject = {

			url: baseServiceUrl + "admin/ads", 
			method: "POST",
			headers: {
				'Authorization': 'Bearer ' + sessionStorage.loginToken
			},
			params: {
				'pagesize': 6,
				'startpage': page,
				'status': status
			}
		};
		$http(requestObject)
		.then(function(response){
			return callback(response);	
		});
	};
	factory.approveAd = function(callback, classifiedId){
		var requestObject = {
			url: baseServiceUrl + "admin/ads/approve/" + classifiedId, 
			method: "PUT",
			headers: {
				'Authorization': 'Bearer ' + sessionStorage.loginToken
			},
		};
		$http(requestObject)
		.then(function(response){
			return callback(response);	
		});
	};
	factory.rejectAd = function(callback, classifiedId){
		var requestObject = {
			url: baseServiceUrl + "admin/ads/reject/" + classifiedId, 
			method: "PUT",
			headers: {
				'Authorization': 'Bearer ' + sessionStorage.loginToken
			},
		};
		$http(requestObject)
		.then(function(response){
			return callback(response);	
		});
	};
	factory.getAdById = function(callback, classifiedId){
		var requestObject = {
			url: baseServiceUrl + "admin/ads/" + classifiedId, 
			method: "GET",
			headers: {
				'Authorization': 'Bearer ' + sessionStorage.loginToken
			},
		};
		$http(requestObject)
		.then(function(response){
			return callback(response);	
		});
	};
	factory.getAdById = function(callback, classifiedId){
		var requestObject = {
			url: baseServiceUrl + "admin/ads/" + classifiedId, 
			method: "DELETE",
			headers: {
				'Authorization': 'Bearer ' + sessionStorage.loginToken
			},
		};
		$http(requestObject)
		.then(function(response){
			return callback(response);	
		});
	};
	factory.editAd = function(callback,title,text,categoryId,townId,changeImage,imageDataUrl,classifiedId){
		var requestObject = {
			url: baseServiceUrl + "admin/ads/" + classifiedId, 
			method: "PUT",
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
		.then(function(response){
			return callback(response);	
		});
	};
	factory.getAllUsers = function(callback){
		var requestObject = {
			url: baseServiceUrl + "admin/users", 
			method: "GET",
			headers: {
				'Authorization': 'Bearer ' + sessionStorage.loginToken
			},
		};
		$http(requestObject)
		.then(function(response){
			return callback(response);	
		});
	};
	factory.editUserProfile = function(callback, username, name, email, phonenumber, townid, isAdmin){
		var requestObject = {
			url: baseServiceUrl + 'admin/user' + username,
			method: 'PUT',
			headers: {
				'Authorization': 'Bearer ' + sessionStorage.loginToken
			},
			data:{
				'username': username,
				'name': name,
				'email': email,
				'phonenumber': phonenumber,
				'townid': townid,
				'isAdmin': isAdmin
			}
		};
		$http(requestObject)
		.then(function(data){
			return callback(data);
		});
	};
	factory.setUserPassword = function(callback, username, newpass, repeatNewpass){
		var requestObject = {
			url: baseServiceUrl + 'admin/setpassword',
			method: 'PUT',
			headers: {
				'Authorization': 'Bearer ' + sessionStorage.loginToken
			},
			data:{
				'username': username,
				'newPassword': newpass,
				'confirmPassword': repeatNewpass,
			}
		};
		$http(requestObject)
		.then(function(data){
			return callback(data);
		});
	};
	factory.deleteUser = function(callback, username){
		var requestObject = {
			url: baseServiceUrl + 'admin/user/' + username,
			method: 'DELETE',
			headers: {
				'Authorization': 'Bearer ' + sessionStorage.loginToken
			}
		};
		$http(requestObject)
		.then(function(data){
			return callback(data);
		});
	};
	factory.getCategories = function(callback){
		var requestObject = {
			url: baseServiceUrl + 'admin/categories',
			method: 'GET',
			headers: {
				'Authorization': 'Bearer ' + sessionStorage.loginToken
			}
		};
		$http(requestObject)
		.then(function(data){
			return callback(data);
		});
	};
	factory.createCategory = function(callback, categoryName){
	var requestObject = {
			url: baseServiceUrl + 'admin/categories' ,
			method: 'POST',
			headers: {
				'Authorization': 'Bearer ' + sessionStorage.loginToken
			},
			data: {
				'name': categoryName
			}
		};
		$http(requestObject)
		.then(function(data){
			return callback(data);
		});
	};
	factory.editCategory = function(callback, categoryId, newName){
		var requestObject = {
			url: baseServiceUrl + 'admin/categories/' + categoryId,
			method: 'PUT',
			headers: {
				'Authorization': 'Bearer ' + sessionStorage.loginToken
			},
			data: {
				'name': newName
			}
		};
		$http(requestObject)
		.then(function(data){
			return callback(data);
		});
	};
	factory.deleteCategory = function(callback, category){
	var requestObject = {
			url: baseServiceUrl + 'admin/categories/' + category,
			method: 'DELETE',
			headers: {
				'Authorization': 'Bearer ' + sessionStorage.loginToken
			}
		};
		$http(requestObject)
		.then(function(data){
			return callback(data);
		});
	};
	factory.getTowns = function(){
	var requestObject = {
			url: baseServiceUrl + 'admin/towns',
			method: 'GET',
			headers: {
				'Authorization': 'Bearer ' + sessionStorage.loginToken
			}
		};
		$http(requestObject)
		.then(function(data){
			return callback(data);
		});
	};
	factory.createTown = function(callback,name){
	var requestObject = {
			url: baseServiceUrl + 'admin/towns',
			method: 'POST',
			headers: {
				'Authorization': 'Bearer ' + sessionStorage.loginToken
			},
			data: {
				'name': name
			}
		};
		$http(requestObject)
		.then(function(data){
			return callback(data);
		});
	};
	factory.editTown = function(callback,name, townId){
	var requestObject = {
			url: baseServiceUrl + 'admin/towns/' + townId,
			method: 'PUT',
			headers: {
				'Authorization': 'Bearer ' + sessionStorage.loginToken
			},
			data: {
				'name': name
			}
		};
		$http(requestObject)
		.then(function(data){
			return callback(data);
		});
	};
	factory.deleteTown = function(callback, town){
	var requestObject = {
			url: baseServiceUrl + 'admin/towns/' + town,
			method: 'DELETE',
			headers: {
				'Authorization': 'Bearer ' + sessionStorage.loginToken
			}
		};
		$http(requestObject)
		.then(function(data){
			return callback(data);
		});
	};

	// SAme as user one - use the user one;
}]);	