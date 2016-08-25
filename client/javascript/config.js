var myApp = angular.module("myApp", ["ngRoute", "ngMessages"]);

myApp.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl: "partials/home.html"
	})
	.when("/partial2", {
		templateUrl: "partials/products.html"
	})
	.when("/partial3", {
		templateUrl: "partials/orders.html"
	})
	.when("/partial4", {
		templateUrl: "partials/customers.html"
	})
	.when("/partial5", {
		templateUrl: "partials/settings.html"
	})
	.otherwise({
		redirectTo: "/"
	});
});