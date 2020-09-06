"use strict";
fetch("http://jsonplaceholder.typicode.com/todos")
    .then(function (response) {
    return response.json();
})
    .then(function (todos) {
    todos.length = 10;
    var container = document.querySelector('.container');
    var completed = [];
    var addItem = function (todo, completed) {
        var div = document.createElement('div');
        div.classList.add('todo');
        if (completed) {
            div.classList.add('completed');
        }
        div.textContent = todo.title;
        container.appendChild(div);
    };
    todos.forEach(function (todo) {
        addItem(todo);
        if (todo.completed) {
            completed.push(todo);
            return;
        }
    });
    completed.forEach(function (todo) { return addItem(todo, true); });
})
    .catch(function (error) {
    console.log(error.message);
});
