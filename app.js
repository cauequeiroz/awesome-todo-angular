(function() {

    var app = angular.module('todo', []);

    app.controller('TodoController', function() {
        this.tasks = [
            {id: 1, name: 'Do something', complete: false, remove: false},
            {id: 2, name: 'Do something else', complete: false, remove: false},
            {id: 3, name: 'Do more stuff', complete: true, remove: false},
            {id: 4, name: 'Do that again', complete: false, remove: false},
        ];

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
    });

})();