angular.module('skap').directive('loginDir', function() {
	return {
		restrict: 'E',
		templateUrl: 'login.html',
		controller: function($scope, userService) {
			$scope.logout = function() {
				userService.logout()
				.then( function() {
					console.log('logout');
				})
			}
		}
	}
})