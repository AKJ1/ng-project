app.directive('topBar', [function () {
	return {
		restrict: 'E',
		controller: 'homeCtrl',
		templateUrl: 'templates/public/topbar.html',
		replace: true
	};
}])