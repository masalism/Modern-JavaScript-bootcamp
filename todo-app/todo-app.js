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

// const paragraphs = document.querySelectorAll('p')

// paragraphs.forEach(function(paragraph) {
//     if(paragraph.textContent.includes('the')) {
//         paragraph.remove()
//     }
// })

const incompleteTodos = todos.filter(function(todos) {
    return !todos.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach(function(todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})