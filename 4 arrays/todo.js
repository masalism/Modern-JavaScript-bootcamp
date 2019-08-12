const todos = ['Eat', 'Take a shower', 'Walk a dog', 'Have an argument', 'Master JavaScript']

todos.splice(2, 1)
todos.push('Do nothing')
todos.shift()

console.log(`You have ${todos.length} todos`)

todos.forEach(function (todo, index) { 
    const num = index + 1
    console.log(`${num}. ${todo}!`)
})

// for (let i = 0; i < todos.length; i++) {
//     const num = i +1
//     const todo = todos[i]
//     console.log(`${num}. ${todo}!`)
// }