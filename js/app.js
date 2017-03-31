angular.module("testApp", ['ui.router', "Service"])

	.config(function ($stateProvider, $urlRouterProvider) {

		var homeState = {
			name: 'home',
			url: '/home',
			templateUrl: '/home.html',
			controller: 'homeController as vm'
		};

		var itemState = {
			name: 'item',
			url: '/item/:id',
			templateUrl: '/item.html',
			controller: 'itemController as vm'
		};

		$stateProvider.state(homeState);
		$stateProvider.state(itemState);

		$urlRouterProvider.otherwise('/home');
	});

