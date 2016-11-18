(function() {
    var app = angular.module('todo', ['elements']);

    app.controller('TodoController', ['$http', function($http) {
        this.tasks = [];

        var $this = this;
        $http.get('/tasks.json').success(function(data) {
            $this.tasks = data;
        });

        this.new = {};

        this.addTask = function() {
            this.new.id = this.tasks[this.tasks.length-1].id + 1;

            this.tasks.push(this.new);
            this.new = {};
        };

        this.completeTask = function(task) {
            task.complete = !task.complete;
        },
        
        this.removeTask = function(task) {
            task.remove = true;
        }
    }]);
})();