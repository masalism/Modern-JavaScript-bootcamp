let todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        id: uuidv4(),
        text: e.target.elements.text.value,
        completed: false
    })
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.text.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})

// Print how many todos left
// Add a p for each todo above

// const paragraphs = document.querySelectorAll('p')

// paragraphs.forEach(function(paragraph) {
//     if(paragraph.textContent.includes('the')) {
//         paragraph.remove()
//     } 
// })

// document.querySelector('#add-todo').addEventListener('click', function (e) {
//     console.log('new todo created')
// })

// Listen for todotext change
// document.querySelector('#new-todo-text').addEventListener('input', function (e) {
//     console.log(e.target.value)
// })