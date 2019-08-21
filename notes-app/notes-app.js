const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Office modifications',
    body: 'Get a new seat'
}, {
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better'
}]

const filters = {
    searchText: ''
}

const renderNotes = function(notes, filters) {
    const filteredNotes = notes.filter(function(note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''
    
    filteredNotes.forEach (function(note){
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(e) {
    e.target.textContent = 'The button was clicked'
})

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#name-form').addEventListener('submit', function(e) {
    //cancel default behavior
    e.preventDefault()
    console.log(e.target.elements.firstName.value)
    e.target.elements.firstName.value = ''
})


// // DOM - document object model

//Query and remove
// const p = document.querySelector('p')
// p.remove()

// //query all and revoe
// const ps = document.querySelectorAll('p')

// ps.forEach(function (p) {
//     p.textContent = '*****'
//     console.log(p.textContent)
//     p.remove()
// })

// //add a new element
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is a new element from JS'
// document.querySelector('body').appendChild(newParagraph)

// document.querySelector('#remove-all').addEventListener('click', function(e) {
//     document.querySelectorAll('.note').forEach(function(note) {
//         note.remove()
//     })
// })
