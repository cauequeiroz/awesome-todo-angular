(function() {
    var app = angular.module('elements', []);

    app.directive('newTask', function() {
        return {
            restrict: 'E',
            templateUrl: 'includes/form-new-task.html'
        };
    });

    app.directive('taskList', function() {
        return {
            restrict: 'E',
            templateUrl: 'includes/task-list.html'
        };
    });
})();