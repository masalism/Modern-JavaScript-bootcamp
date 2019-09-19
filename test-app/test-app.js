const notes = [{
    text: 'Do a workout',
    completed: false
}, {
    text: 'Master Javascript',
    completed: false
}, {
    text: 'Have an argument',
    completed: true
}, {
    text: 'Do nothing',
    completed: true
}]

const filters = {
    searchText: '',
}

// Render notes
const renderNotes = function (notes, filters) {
    let filteredNotes = notes.filter(function (note) {
        return note.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    const incompleteNotes = filteredNotes.filter(function (note) {
        return !note.completed
    })

    document.querySelector('#notes').innerHTML = ''
    document.querySelector('#notes-left').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteNotes.length} notes left`
    document.querySelector('#notes-left').appendChild(summary)

    filteredNotes.forEach(function (note) {
        const noteElement = document.createElement('p')
        noteElement.textContent = note.text
        document.querySelector('#notes').appendChild(noteElement)
    })
}

// Call function torender notes
renderNotes(notes, filters)

// Enter your name
document.querySelector('#enter-name').addEventListener('input', function (e) {
    document.querySelector('#name').innerHTML = ''
    const enterName = document.createElement('p')
    enterName.textContent = e.target.value
    document.querySelector('#name').appendChild(enterName)
})

// Live notes rendering
document.querySelector('#filter-notes').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#new-note').addEventListener('submit', function(e) {
    e.preventDefault()
    notes.unshift({
        text: e.target.elements.text.value,
        completed: false      
    })
    renderNotes(notes, filters)
})

// document.querySelector('#delete-all').addEventListener('click', function(e) {
//     document.querySelector('#notes').remove() 
//     renderNotes(notes, filters)
// })