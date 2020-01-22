const todos =  ['Drink', 'Eat', 'Complete this course', 'Rest', 'Go to a shower'];

todos.splice(2,1);
todos.push('Do nothing');
todos.shift();

console.log(`You have ${todos.length} todos`);

todos.forEach(function(item, i) {
    const num = i + 1
    console.log(`${num}. ${item}`);
});

for (let i = 0; i < todos.length; i++) {
    const num = i + 1
    console.log(`${num}. ${todos[i]}`);
}

// console.log(todos);