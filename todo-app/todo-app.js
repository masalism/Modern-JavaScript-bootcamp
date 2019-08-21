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

// 1. Remove any paragraph that has text THE

const paragraphs = document.querySelectorAll('p')
paragraphs.forEach(function(paragraph) {
    if( paragraph.textContent.includes('the')) {
        paragraph.remove()
    }
})
