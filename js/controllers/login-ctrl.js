angular.module('skap').controller('loginCtrl', function($scope, UserService, $state) {

	$scope.login = function() {
		UserService.login($scope.user).then(function(authedUser) {
			$state.go('threads');
		}).catch(function(err) {
			alert("NEGATIVE, SIR") 
		})
	};

	$scope.loginWithGoogle = function() {
		UserService.loginWithGoogle().then(function(authedUser) {
			$state.go('threads');
		}).catch(function(err) {
			console.log("bad login", err);
		})
	};

	$scope.loginWithGithub = function() {
		UserService.loginWithGithub().then(function(authedUser) {
			$state.go('threads');
		}).catch(function(err) {
			console.log("bad login", err);
		})
	};

});