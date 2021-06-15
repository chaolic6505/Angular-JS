// MODULE
var angularApp = angular.module('angularApp', ['ngMessages', 'ngResource']);

// CONTROLLERS
angularApp.controller('mainController', [
	'$scope',
	'$log',
	function ($scope) {},
]);

angularApp.controller('LogController', [
	'$scope',
	'$log',
	($scope, $log) => {
		$scope.$log = $log;
		$scope.message = 'Hello World!';
	},
]);
