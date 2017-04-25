var App = angular.module('App', ['ngRoute']);

App.config(['$routeProvider',
	function($routeProvider){
		$routeProvider
		.when('/home', {
			templateUrl: 'partials/home.html',
			controller:'ModuleController'
		})
		.when('/register', {
			templateUrl: 'partials/register.html',
			controller:'UsersController'
		})
		.when('/login', {
			templateUrl: 'partials/login.html',
			controller:'UsersController'
		})
		.when('/addModule', {
			templateUrl: 'partials/addModule.html',
			controller:'ModuleController'
		})
		.otherwise({
			redirectTo: "/login"
		})
	}
])

//Users
App.controller('UsersController',["$scope", "$location", "UserService", "$http",function($scope, $location, UserService, $http){
	$scope.register = function(newUser){
		register(newUser)
		$scope.realuser = '';
	}
	$scope.login = function(){
		authenticate($scope.realUser)
		$scope.realUser=''
		$location.path('#/home');
	}
	$scope.logout =function(){
			logoutUser();
			$location.path('#/login');
		
	}
}])

App.factory('UserService',["$location", "$http", function($location, $http){
	logoutUser = function(){
	}
	
	register = function(newUser){
	console.log("newuser",newUser)
		$http.post('/api/users/register',newUser).success(function(res){
			console.log("res",res)
			$location.path('#/login');
		})
	}
	authenticate = function(user){
		console.log("newuser", user)
		$http.post('/api/users/login',user).success(function(res){
			console.log("res",res)
		})


	}
}])

App.controller('ModuleController',["$scope", "$location", "ModuleService", "$http",function($scope, $location, ModuleService, $http){
	$scope.addModule = function(newModule){
		console.log("new module", newModule)
		var module = {title : newModule}
		addModule(module)
		$scope.newModule=''
		$location.path('#/home');
	};
	$http.get('/api/modules/getModules')
	.success(function(res){
		console.log("res",res)
		$scope.modules=res
	})
	.error(function(res){
		console.log("failed to get module")
	})
	}])

App.factory('ModuleService',['$http', '$location', function($http, $location){
	addModule= function(newDetails){
		$http.post('/api/modules/addModule', newDetails).success(function(){
			console.log("added");
			$location.path('/home')
		})
		.error(function(res){
			console.log("failed")
		})
	}
}])
