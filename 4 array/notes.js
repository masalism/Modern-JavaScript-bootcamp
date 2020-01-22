const notes = ['Note 1', 'Note 2', 'Note 3'];

// console.log(notes.pop());
// notes.push('My new note');

// console.log(notes.shift());
// notes.unshift('My first note');

// notes.splice(1, 1, 'This is the new second item');

notes[2] = 'This is now the new note 3';

notes.forEach(function (item, index) {
    console.log(index);
    console.log(item);
});

console.log(notes.length);
// console.log(notes[notes.length - 2]);
console.log(notes);

console.log(notes.indexOf('note 2'));

// // Counting... 1
// for (let i = 2; i >= 0; i--) {
//     console.log(i);
// }

// for (let i = notes.length - 1; i >=0; i--) {
//     console.log(notes[i]);
// }
