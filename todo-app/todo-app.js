const todos = [{
    text: 'Eat',
    completed: false
}, {
    text: 'Take a shower',
    completed: true
}, {
    text: 'Walk a dog',
    completed: false
}, {
    text: 'Have an argument',
    completed: true
}, {
    text: 'Master JavaScript',
    completed: false
}]

//start

const filters = {
    searchText: ''
}

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)

    filteredTodos.forEach(function (todo) {
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#todos').appendChild(p)
    })
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

//adding new todo
document.querySelector('#new-todo').addEventListener('submit', function(e) {
    e.preventDefault()
    todos.push({
        //adding object
        text: e.target.elements.text.value,
        completed: false
    })
    renderTodos(todos, filters)
    e.target.elements.text.value = ''
})

// const paragraphs = document.querySelectorAll('p')

// paragraphs.forEach(function (paragraph) {
//     if (paragraph.textContent.includes('the')) {
//         paragraph.remove()
//     }
// })

// Print a message how many todos left
// Add a p off each todo left

// document.querySelector('#add-todo').addEventListener('click', function (e) {
//     console.log('button was clicked')
// })

// //Listen for todo text change
// document.querySelector('#new-todo-text').addEventListener('input', function (e){
//     console.log(e.target.value)
// })