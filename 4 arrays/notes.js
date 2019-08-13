const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office modifications',
    body: 'Get a new seat'
}]

//remove item at the end - pop
// console.log(notes.pop())

// //add item at the end of the array - push
// notes.push('My new note')

// //removes first item
// console.log(notes.shift())

// //add first item
// notes.unshift('My first note')

// notes.splice(1, 1, 'This is a new second item')

// for (let count = 2; count >= 0; count--) {
//     console.log(count)
// }

// for (let count = notes.length - 1; count >= 0; count--) {
//     console.log(notes[count])
// }
// replace
// notes[2] = 'This is now the note new 3'

// notes.forEach(function (item, index) {
//     console.log(index)
//     console.log(item)
// })

const findNote = function(notes, noteTitle) {
    return notes.find(function(note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

const note = findNote(notes, 'office modifications')
console.log(note)




