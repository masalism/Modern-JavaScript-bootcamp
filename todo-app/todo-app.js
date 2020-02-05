const todos = [{
    text: 'Drink',
    completed: false
}, {
    text: 'Eat',
    completed: true
}, {
    text: 'Complete this course',
    completed: false
}, {
    text: 'Rest',
    completed: false
}, {
    text: 'Go to a shower',
    completed: true
}];

const filters = {
    searhText: '',
    hideCompleted: false
};

const renderTodos = function(todos, filters) {
    const filteredTodos = todos.filter(function(todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searhText.toLowerCase());
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
        return searchTextMatch && hideCompletedMatch;
    });

    // filteredTodos = filteredTodos.filter(function(todo) {
    //     return !filters.hideCompleted || !todo.completed;
    //     if (filters.hideCompleted){
    //         return !todo.completed;
    //     } else {
    //         return true;
    //     }
    // });

    const incompleteTodos = filteredTodos.filter(function(todo) {
        return !todo.completed;
    });

    document.querySelector('#todos').innerHTML = '';

    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} left`;
    document.querySelector('#todos').appendChild(summary);
    
    filteredTodos.forEach(function(todo) {
        const p = document.createElement('p');
        p.textContent = todo.text;
        document.querySelector('#todos').appendChild(p);
    });
}

renderTodos(todos, filters);

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searhText = e.target.value;
    renderTodos(todos, filters);
})

document.querySelector('#new-todo').addEventListener('submit', function(e) {
    e.preventDefault();
    todos.push({
        text: e.target.elements.text.value,
        completed: false
    });
    renderTodos(todos, filters);
    e.target.elements.text.value = '';
});

document.querySelector('#hide-completed').addEventListener('change', function(e) {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
});











// const ps = document.querySelectorAll('p');
// console.log(ps);

// ps.forEach(function(p) {
//     if (p.textContent.includes('the')) {
//         p.remove();
//     }
// });
// document.querySelector('#new-todo-text').addEventListener('input', function(e) {
//     console.log(e.target.value);
// })
// document.querySelector('#add-todo').addEventListener('click', function(e) {
//     console.log('works');
// });