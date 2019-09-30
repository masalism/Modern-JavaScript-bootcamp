let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    const id = uuidv4()
    const timeStamp = moment().valueOf()
    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timeStamp,
        updatedAt: timeStamp
    })
    saveNotes(notes)
    location.assign(`/notes-app/edit.html#${id}`)
})

// user interaction
document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

window.addEventListener('storage', function(e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})



// const now = moment()
// now.subtract(1, 'week').subtract(20, 'days')
// console.log(now.format('MMMM Dd'))
// console.log(now.fromNow())

// const nowTimestamp = now.valueOf()
// console.log((nowTimestamp).toString())

// document.querySelector('#name-form').addEventListener('submit', function(e) {
//     e.preventDefault()
//     console.log(e.target.elements.firstName.value)
//     e.target.elements.firstName.value = ''
// })

// const ps = document.querySelectorAll('p')
// ps.forEach(function (p) {
//     // p.remove()
//     // console.log(p.textContent)
//     p.textContent = '********'
// })

// Add a new element
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is a new element from JS'
// document.querySelector('body').appendChild(newParagraph)

// DOM - document object model

// const p = document.querySelector('p')
// p.remove()

// Query all and remove

// document.querySelector('#remove-all').addEventListener('click', function (e) {
//     document.querySelectorAll('.note').forEach(function (note) {
//         note.remove()
//     })
// })

// document.querySelector('#for-fun').addEventListener('change', function (e) {
//     console.log(e.target.checked)
// })

//creating and uptading
// localStorage.setItem('location', 'Philadelphia')

//reading
//console.log(localStorage.getItem('location'))

//deleting
//localStorage.removeItem('location')

//delete all
// localStorage.clear()