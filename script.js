"use strict";

angular
.module('PomodoroApp', [])
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
.service("PomodoroService", function(){
	this.data = [];

	this.add = function(item){
		this.data.push(item);
	}
});

