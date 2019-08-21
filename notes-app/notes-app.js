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

document.querySelector('#create-note').addEventListener('click', function(e) {
    e.target.textContent = 'The button was clicked'
})

document.querySelector('#remove-all').addEventListener('click', function(e) {
    document.querySelectorAll('.note').forEach(function(note) {
        note.remove()
    })
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
