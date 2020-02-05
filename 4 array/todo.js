const todos = [{
    text: 'Drink',
    completed: false
}, {
    text: 'Eat',
    completed: true
}, {
    text: 'Complete this course',
    completed: false
}, {
    text: 'Rest',
    completed: false
}, {
    text: 'Go to a shower',
    completed: true
}];

const sortTodos = function(todos) {
    todos.sort(function(a,b) {
        if (!a.completed && b.completed) {
            return -1;
        } else if (!b.completed && a.completed) {
            return 1;
        } else {
            return 0;
        }
    });
}

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo, index) {
        return todo.text.toLowerCase() === todoText.toLowerCase();
    });
    if (index > -1) {
        todos.splice(index, 1);
    }
}

const getThingsToDo = function (todos) {
    return todos.filter(function(todo, index) {
        return !todo.completed;
    });
}



sortTodos(todos);
console.log(todos);

// console.log(getThingsToDo(todos));

// deleteTodo(todos, 'compleTe this course');
// console.log(todos);


// todos.splice(2,1);
// todos.push('Do nothing');
// todos.shift();

// console.log(`You have ${todos.length} todos`);

// todos.forEach(function(item, i) {
//     const num = i + 1
//     console.log(`${num}. ${item}`);
// });

// for (let i = 0; i < todos.length; i++) {
//     const num = i + 1
//     console.log(`${num}. ${todos[i]}`);
// }

// console.log(todos);