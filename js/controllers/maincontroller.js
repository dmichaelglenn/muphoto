var app = angular.module("UgrinApp");

app.controller("MainController", ["$scope", function($scope){
    console.log("hitting the main controller");
	$scope.testMessage = "this is the home page";

}]);
