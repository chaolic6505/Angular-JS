// MODULE
var angularApp = angular.module('angularApp', [
	'ngMessages',
	'ngResource',
	'ngRoute',
]);
//Routing
angularApp.config(function ($routeProvider) {
	$routeProvider

		.when('/', {
			templateUrl: 'pages/main.html',
			controller: 'firstController',
		})

		.when('/second', {
			templateUrl: 'pages/second.html',
			controller: 'secondController',
		});
});

// CONTROLLERS
angularApp.controller('firstController', [
	'$scope',
	'$filter',
	function ($scope, $filter) {
		$scope.name = ' First';
	},
]);

angularApp.controller('secondController', [
	'$scope',
	'$filter',
	function ($scope, $filter) {
		$scope.name = ' Second';
	},
]);
angularApp.controller('mainController', [
	'$scope',
	'$filter',
	function ($scope, $filter) {
		$scope.lowerCaseHandle = () => {
			return $filter('lowercase')($scope.handle);
		};
	},
]);

angularApp.controller('LogController', [
	'$scope',
	'$log',
	($scope, $log) => {
		$scope.$log = $log;
		$scope.message = 'Hello World!';
	},
]);
