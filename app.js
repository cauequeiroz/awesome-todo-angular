(function() {

    var app = angular.module('todo', []);

    app.controller('TodoController', function() {
        this.tasks = [
            {id: 1, name: 'Do something', complete: false},
            {id: 2, name: 'Do something else', complete: false},
            {id: 3, name: 'Do more stuff', complete: true},
            {id: 4, name: 'Do that again', complete: false},
        ];

        this.new = {};

        this.addTask = function() {
            this.new.id = this.tasks[this.tasks.length-1].id + 1;

            this.tasks.push(this.new);
            this.new = {};
        };
    });

})();