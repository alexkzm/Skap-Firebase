angular.module('skap').service('ThreadService', function(firebaseUrl, Firebase) {

	this.getThreads = function() {
		return new Firebase(firebaseUrl.url+'/threads');
	};
});