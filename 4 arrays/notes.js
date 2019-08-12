const notes = ['Note 1', 'Note 2', 'Note 3']

//remove item at the end - pop
console.log(notes.pop())

// //add item at the end of the array - push
// notes.push('My new note')

// //removes first item
// console.log(notes.shift())

// //add first item
// notes.unshift('My first note')

// notes.splice(1, 1, 'This is a new second item')

// // replace
notes[2] = 'This is now the note new 3'

notes.forEach(function (item, index) {
    console.log(index)
    console.log(item)
})

console.log(notes.length)
console.log(notes)

//Counting... 1

// for (let count = 2; count >= 0; count--) {
//     console.log(count)
// }

// for (let count = notes.length - 1; count >= 0; count--) {
//     console.log(notes[count])
// }
