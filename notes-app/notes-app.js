let notes = [];

const filters = {
    searchText: ''
};

// Check for existing saved data
const notesJOSN = localStorage.getItem('notes') 

if (notesJOSN !== null) {
    notes = JSON.parse(notesJOSN);
} 

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    document.querySelector('#notes').innerHTML = '';

    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p');
        noteEl.textContent = note.title;
        document.querySelector('#notes').appendChild(noteEl);
    });
}

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', function (e) {
    notes.push({
        title: '',
        body: ''
    });
    localStorage.setItem('notes',  JSON.stringify(notes));
    renderNotes(notes, filters);
});

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
});

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value);
});


// const user = {
//     name: 'Mantas',
//     age: 29
// };
// const userJSON = JSON.stringify(user);
// console.log(userJSON);
// localStorage.setItem('user', userJSON);

// const userJSON = localStorage.getItem('user');
// const user = JSON.parse(userJSON);
// console.log(user.name);

//create
// localStorage.setItem('location', 'Lithuania'); //key, value

//get
// console.log(localStorage.getItem('location'));// key

//delete
// localStorage.removeItem('location');

// localStorage.clear();

// document.querySelector('#for-fun').addEventListener('change', function(e) {
//     console.log(e.target.checked);
// });

// document.querySelector('#name-form').addEventListener('submit', function(e) {
//     e.preventDefault();
//     console.log(e.target.elements.firstName.value);
//     e.target.elements.firstName.value = '';
// });


// // DOM - Document Object Model

// // const p = document.querySelector('p');
// // p.remove();

// // Query all and remove
// const ps = document.querySelectorAll('p');

// ps.forEach(function(p) {
//     p.textContent = '*******';
//     // console.log(p.textContent);
// });

// const newParagraph = document.createElement('p');
// newParagraph.textContent = 'This is my new paragraph';
// document.querySelector('body').appendChild(newParagraph);

// document.querySelector('#remove-all').addEventListener('click', function (e) {
//     document.querySelectorAll('.note').forEach(function (note) {
//         note.remove();
//     });
// });