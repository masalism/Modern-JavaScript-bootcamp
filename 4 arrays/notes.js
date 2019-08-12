const notes = ['Note 1', 'Note 2', 'Note 3']

//remove item at the end - pop
console.log(notes.pop())

//add item at the end of the array - push
notes.push('My new note')

//removes first item
console.log(notes.shift())

//add first item
notes.unshift('My first note')

notes.splice(1, 1, 'This is a new second item')

notes[2] = 'This is now the note new 3'
 
console.log(notes.length)
console.log(notes)


