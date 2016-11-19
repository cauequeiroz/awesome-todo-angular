(function() {
    angular.module('todo')
    .config(function($routeProvider) {
        $routeProvider

        .when('/tasks', {
            templateUrl: 'templates/view-tasks.html'
        })
        .when('/folder', {
            templateUrl: 'templates/view-folder.html'
        })
        .otherwise({
            redirectTo: '/tasks'
        });
    })
})();
