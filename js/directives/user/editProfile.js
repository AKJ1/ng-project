app.directive('editProfile', [function () {
	return {
		restrict: 'E',
		templateUrl: 'templates/user/userEditor.html',
		replace: true
	};
}]);