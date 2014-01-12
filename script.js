"use strict";

function PomodoroCtrl($scope) {
	$scope.tasks = [];
	
	$scope.add = function() {
		$scope.tasks.push({
			name: $scope.name,
			estimatedCount: $scope.estimatedCount,
			doneCount: 0
		});
		
		delete $scope.name;
		delete $scope.estimatedCount;
	}
}