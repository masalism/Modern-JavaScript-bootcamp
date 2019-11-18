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

// Get the DOM elements for an individual note
const generateTodosDOM = function (todo) {
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

    // Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    todoEl.appendChild(checkbox)

    // Setup the todo text
    todoText.textContent = todo.text
    todoEl.appendChild(todoText)

    // Setuo the remove button
    removeButton.textContent = 'x'
    todoEl.appendChild(removeButton)

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