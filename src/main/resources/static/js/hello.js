angular.module('hello', []).controller('home', function($scope, $http) {
	  $http.get('/greeting').then(function(response) {
		  $scope.greeting = response.data;
	  })
})