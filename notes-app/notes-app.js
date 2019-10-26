// DOM - document object module

// query and remove
// const p = document.querySelector('p')
// p.remove()

// query all and remove
const ps = document.querySelectorAll('p')

ps.forEach(function (p) {
    // p.remove()
    // console.log(p.textContent)
    p.textContent = '******'
})
