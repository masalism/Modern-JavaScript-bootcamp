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

// DOM - document object model

//Query and remove
// const p = document.querySelector('p')
// p.remove()

//query all and revoe
const ps = document.querySelectorAll('p')

ps.forEach(function (p) {
    p.textContent = '*****'
    // console.log(p.textContent)
    // p.remove()
})
