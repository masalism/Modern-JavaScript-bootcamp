// Fetch existing todos form localStorage
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')

    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

// Save todos to local storage
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Render application todos based of filters
const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompltetedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompltetedMatch

    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })
    
    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    generateSummaryDOM(incompleteTodos)

    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodosDOM(todo)) 
    })
}

// Remove todo by id
const removeTodo = function (id) {
    const todoIndex = todos.findIndex(function(todo) {
        return todo.id === id
    })

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Toggle the completed value for a given todo
const toggleTodo = function(id) {
    const todo = todos.find(function(todo) {
        return todo.id === id
    })

    if (todo !== undefined) {
        todo.completed = !todo.completed
    }
}

// Get the DOM elements for an individual note
const generateTodosDOM = function (todo) {
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

    // Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    todoEl.appendChild(checkbox)
    checkbox.addEventListener('change', function() {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    // Setup the todo text
    todoText.textContent = todo.text
    todoEl.appendChild(todoText)

    // Setuo the remove button
    removeButton.textContent = 'x'
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', function() {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return todoEl
}

// Get the DOM elements for list summary
const generateSummaryDOM = function(incompleteTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}

























    // filteredTodos = filteredTodos.filter(function (todo) {
    //     return !filters.hideCompleted || !todo.completed
    //     // if (filters.hideCompleted) {
    //     //     return !todo.completed
    //     // } else {
    //     //     return true
    //     // }
    // })