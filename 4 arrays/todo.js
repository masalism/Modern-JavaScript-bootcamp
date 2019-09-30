const todos = [{
    text: 'Buy food',
    completed: false
}, {
    text: 'Have an argument',
    completed: true
}, {
    text: 'Master JavaScript',
    completed: false
}, {
    text: 'Do nothing',
    completed: true
}, {
    text: 'Apologise',
    completed: false
}]

// 1. Covert array to array of objects
// 2 Create function to remove todo by text value

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo, index) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })

    if (index > -1) {
        todos.splice(index, 1)
    }
}

const getThingsToDo = function (todos) {
    return todos.filter(function (todo, index) {
        return !todo.completed
    })
}

sortTodos(todos)
console.log(todos)

// console.log(getThingsToDo(todos))

// deleteTodo(todos, '!!buy Food')
// console.log(todos)


// todos.splice(2, 1)
// todos.push('Drink coffee')
// todos.shift()

// console.log(`You have ${todos.length} todos`)

// todos.forEach(function (todo, index) {
//     console.log(`${index + 1}. ${todo}`)
// })

// for (let count = 0; count < todos.length; count++) {
//     console.log(`${count + 1}. ${todos[count]}`)
// }
