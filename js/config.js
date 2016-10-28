var app = angular.module("UgrinApp", ["ngRoute"]);


app.config(function ($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl: "./resources/templates/home.html",
		controller: "MainController"
	})
	.otherwise("/", {
		templateUrl: "templates/home.html",
		controller: "MainController"
	});
});
