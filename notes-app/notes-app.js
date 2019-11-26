let notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    const id = uuidv4()
    notes.push({
        id: id,
        title: '',
        body: ''
    })
    saveNotes(notes)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})

window.addEventListener('storage', function(e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})




// // Unix Epoch - January 1st 00:00:00
// // 1000
// const now = new Date()
// const timestamp = now.getTime()

// const myDate = new Date(timestamp)
// console.log(myDate.getFullYear())

// // console.log(`Year: ${now.getFullYear()}`)
// // console.log(`Month: ${now.getMonth()}`)
// // console.log(`Day of the month: ${now.getDate()}`)
// // console.log(`Hours: ${now.getHours()}`)
// // console.log(`Minutes: ${now.getMinutes()}`)
// // console.log(`Seconds: ${now.getSeconds()}`)

// const date1 = new Date('March 1 2018 12:00:00')
// const date2 = new Date()

// const date1timestamp = date1.getTime()
// const date2timestamp = date2.getTime()

// if (date1timestamp < date2timestamp) {
//     console.log(date2.toString())
// } else if(date2timestamp < date1timestamp) {
//     conso.log(date1.toString())
// }
















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