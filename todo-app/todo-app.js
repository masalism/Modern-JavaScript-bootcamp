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

const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} left`
document.querySelector('body').appendChild(summary)

todos.forEach(function(todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})

document.querySelector('#add-todo').addEventListener('click', function(e) {
    console.log('button was clicked')
})


// const paragraphs = document.querySelectorAll('p')

// paragraphs.forEach(function (paragraph) {
//     if (paragraph.textContent.includes('the')) {
//         paragraph.remove()
//     }
// })

// Print a message how many todos left
// Add a p off each todo left