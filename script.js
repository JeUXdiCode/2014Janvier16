"use strict";

angular
.module('PomodoroApp', ["ngRoute"])
.controller("PomodoroCtrl", function PomodoroCtrl($scope, PomodoroService) {
	$scope.tasks = PomodoroService.data;
	
	$scope.add = function() {
		PomodoroService.add({
			name: $scope.name,
			estimatedCount: $scope.estimatedCount,
			doneCount: 0
		});
		
		delete $scope.name;
		delete $scope.estimatedCount;
	}
})
.controller("PomodoroDetailCtrl", function PomodoroCtrl($scope, PomodoroService, $routeParams) {
	$scope.task = PomodoroService.get($routeParams.id);
})
.service("PomodoroService", function(){
	this.data = [
		{
			"name": "Faire des crêpes",
			"estimatedCount": 2,
			"doneCount": 0
		},
		{
			"name": "Manger des crêpes",
			"estimatedCount": 1,
			"doneCount": 0
		}
	];

	this.add = function(item){
		this.data.push(item);
	}

	this.get = function(index){
		return this.data[index];
	}
})
.config(function($routeProvider){
	$routeProvider.
		when('/list', {
			templateUrl: 'partials/list.html',
			controller: "PomodoroCtrl"
		}).
		when('/detail/:id', {
			templateUrl: 'partials/detail.html',
			controller: "PomodoroDetailCtrl"
		}).
		otherwise({
			redirectTo: "/list"
		})
});

