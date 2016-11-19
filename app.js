(function() {
    angular.module('todo', ['elements', 'ngRoute'])

    .controller('TodoController', ['$http', function($http) {
        this.tasks = [];
        this.new   = {};

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

        var controller = this;
        $http.get('tasks.json').success(function(data) {
            controller.tasks = data;
        });
    }]);
})();