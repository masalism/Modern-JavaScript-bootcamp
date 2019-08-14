const todos = [{
    text: 'Eat',
    completed: false
}, {
    text: 'Take a shower',
    completed: true
}, {
    text: 'Walk a dog',
    completed: true
}, {
    text: 'Have an argument',
    completed: true
}, {
    text: 'Master JavaScript',
    completed: false
}]

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo, index) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1)
    }
}

const getThingsToDo = function(todos) {
    return todos.filter(function (todo, index) {
        return !todo.completed // === false
    })
}

const sortTodos = function(todos) {
    todos.sort(function(a, b) {
        if (a.completed === false && b.completed === true) {
            return -1
        } else if (b.completed === false && a.completed === true) {
            return 1
        } else {
            return 0
        }
        // if (!a.completed) {
        //     return -1
        // } else if (a.completed) {
        //     return 1
        // } else {
        //     return 0
        // }
    })
}

sortTodos(todos)
console.log(todos)

// console.log(getThingsToDo(todos))


// deleteTodo(todos, 'take a shwer')
// console.log(todos)

