angular.module('skap', ['firebase', 'ui.router'])

.constant('firebaseUrl', {
	url: 'https://skap.firebaseio.com/'
})

.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('welcome', {
			url: '/welcome',
			templateUrl: '/templates/welcome.html'
		})

		.state('info', {
			url: '/info',
			templateUrl: '/templates/info.html'
		})

		.state('login', {
			url: '/login',
			controller: 'loginCtrl',
			templateUrl: '/templates/login.html'
		})
		.state('signup', {
			url: '/signup',
			controller: 'signupCtrl',
			templateUrl: '/templates/signup.html'
		})

		.state('threads', {
			url: '/threads',
			controller: 'threadsCtrl',
			templateUrl: '/templates/threads.html',
			resolve: {
				threadsRef: function(ThreadService) {
					return ThreadService.getThreads();
				}
			}
		})

	$urlRouterProvider.otherwise('/welcome');

}); 

	