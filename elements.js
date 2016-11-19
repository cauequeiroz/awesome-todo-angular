(function() {
    angular.module('elements', [])

    .directive('newTask', function() {
        return {
            restrict: 'E',
            templateUrl: 'includes/form-new-task.html'
        };
    })

    .directive('taskList', function() {
        return {
            restrict: 'E',
            templateUrl: 'includes/task-list.html'
        };
    });
})();