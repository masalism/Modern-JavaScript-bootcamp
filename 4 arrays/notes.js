const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

const sortNotes = function(notes) {
    notes.sort(function(a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })   
}

sortNotes(notes)

console.log(notes)

// console.log(findNotes(notes, 'eating'))

// const note = findNote(notes, 'office modification')

// console.log(note)


// const findNote = function(notes, noteTitle) {
//     const index = notes.findIndex(function(note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

// console.log(notes.length)
// console.log(notes)

// const index = notes.findIndex(function(note, index) {
//     console.log(note)
//     return note.title === 'Habbits to work on'
// })

// console.log(index)
// notes[2] = 'This is now the new note 3'

// notes.forEach(function (item, index) {
//     console.log(index)
//     console.log(item)
// })

// // Counting... 1
// for (let count = 0; count <= 2; count++) {
//     console.log(count)
// }

// for (let count = notes.length -1; count >= 0; count--) {
//     console.log(notes[count])
// }

// // Removes last item of the array
// console.log(notes.pop())
// // Add item to the end of the array
// notes.push('My new note')

// // removes first item
// console.log(notes.shift())

// //addfirst item
// notes.unshift('My first note')

// notes.splice(1, 1, 'This the new second item')