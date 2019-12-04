// const myAge = 29
// const message = myAge >= 18 ? 'You can vote!' : 'You cannot vote.'
// console.log(message)

// if (myAge >= 18) {
//     message = 'You can vote'
// } else {
//     message = 'You cannot vote'
// }

const myAge = 29

const showPage = () => {
    return 'Showing the page'
}

const showErrorPage = () => {
    return 'Showing the error page'
}

const message = myAge >= 21 ? showPage() : showErrorPage()
console.log(message)

const team = ['Tyler', 'Porter']

const message2 = team.length <= 4 ? `Your team size: ${team.length}` : 'Too many people'

console.log(message2)
