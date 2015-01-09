app.service('AuthenticateService', ['$http', '$rootScope', 'baseServiceUrl', function($http, $rootScope, baseServiceUrl) {

	this.login = function(user, pass){
		var loginReq = { "username": user, "password": pass };
		resource = $http.post(baseServiceUrl + "user/login", loginReq)
		.then(function(response){
			console.log(response);
			sessionStorage.loginToken = response.data.access_token;
			sessionStorage.username = response.data.username;
			self.broadcastUser();
		});
	};
	this.logout = function(){
		delete(sessionStorage.loginToken) ;
		delete(sessionStorage.username);
	
		self.broadcastUser();
	};

	this.broadcastUser = function(){
		$rootScope.$broadcast('AuthenticationUser', {key: 'user', newvalue: sessionStorage.username});
		$rootScope.$broadcast('AuthenticationToken', {key: 'token', newvalue: sessionStorage.loginToken});
	};
	
	this.registerUser = function(user, pass, passTwo, name, email, phone, townId){
		var registerReq = { "username": user, "password": pass, "confirmPassword": passTwo, "name": name, "email": email, "phone":phone, "townId": townId };
		resource = $http.post(baseServiceUrl + "user/register", registerReq)
		.then(function(response){
			console.log(response);
			sessionStorage.loginToken = response.data.access_token;
			sessionStorage.username = response.data.username;
			self.broadcastUser();
		});
	};

	var self = this;
}]);
