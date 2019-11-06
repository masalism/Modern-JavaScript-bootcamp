const notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    notes.push({
        title: '',
        body: ''
    })
    saveNotes(notes)
    renderNotes(notes, filters)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})


















// const user = {
//     name: 'Mantas',
//     age: 27
// }

// const userJSON = JSON.stringify(user)
// console.log(userJSON)
// localStorage.setItem('user', userJSON)

// Create
//localStorage.setItem('location', 'Lithuania')

// Read
// console.log( localStorage.getItem('location'))

//Delete
// localStorage.removeItem('location')

//delete everything
// localStorage.clear()

// document.querySelector('#for-fun').addEventListener('change', function (e) {
//     // console.log(e.target.checked)
//     e.target.checked
// })

// document.querySelector('#name-form').addEventListener('submit', function(e) {
//     e.preventDefault()
//     console.log(e.target.elements.firstName.value)
//     e.target.elements.firstName.value = ''
// })

// DOM - document object module

// query and remove
// const p = document.querySelector('p')
// p.remove()

// query all and remove
// const ps = document.querySelectorAll('p')

// ps.forEach(function (p) {
//     // p.remove()
//     // console.log(p.textContent)
//     p.textContent = '******'
// })

// Add a new element
// const newParagraph= document.createElement('p')
// newParagraph.textContent = 'This is a new element from JS'
// document.querySelector('body').appendChild(newParagraph)

// document.querySelector('#remove-all').addEventListener('click', function (e) {
//     document.querySelectorAll('.note').forEach(function (note) {
//         note.remove()
//     })
// })