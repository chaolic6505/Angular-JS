// MODULE
var angularApp = angular.module('angularApp', ['ngMessages', 'ngResource']);

// CONTROLLERS
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
