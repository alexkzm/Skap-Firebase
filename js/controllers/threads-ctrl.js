angular.module('skap').controller('threadsCtrl', function(threadsRef, $scope, $firebaseArray, UserService, $state) {

	$scope.threads = $firebaseArray(threadsRef);

	$scope.newThread = {};

	$scope.createThread = function() {
		$scope.threads.$add($scope.newThread);
	};
});