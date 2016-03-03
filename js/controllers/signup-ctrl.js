angular.module('skap').controller('signupCtrl', function($scope, UserService) {

	$scope.register = function() {
		UserService.register($scope.newUser).then(function(userRef) {
			$state.go('login');
		}).catch(function(err) {
			console.log("Error", err);
		})
	}
});