const todos = ['Eat', 'Take a shower', 'Walk a dog', 'Have an argument', 'Master JavaScript']

todos.splice(2, 1)
todos.push('Do nothing')
todos.shift()

console.log(`You have ${todos.length} todos`)
console.log(todos)

