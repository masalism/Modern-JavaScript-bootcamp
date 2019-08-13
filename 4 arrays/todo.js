const todos = [{
    text: 'Eat',
    completed: true
}, {
    text: 'Take a shower',
    completed: false
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

// 2. Create function to remove a todo bytext value
// 3.

deleteTodo(todos, 'take a shwer')

console.log(todos)

