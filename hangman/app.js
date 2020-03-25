const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const game1 = new Hangman('Car Parts', 2);

puzzleEl.textContent = game1.puzzle;
guessesEl.textContent = game1.statusMessage;

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    puzzleEl.textContent = game1.puzzle;
    guessesEl.textContent = game1.statusMessage;
});



// Primitive value: string, number, boolean, null, undefined

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

// const team = new Array(['Luke', 'Maddison']);
// console.log(team.hasOwnProperty('filter'));

// const getScore = () => 1;
// console.log(getScore);

// const product = 'Computer';
// console.log(product.split(''));

// const otherProduct = new String('Phone');
// console.log(otherProduct);

// const product = new Object({
//     name: 'the War Of Art'
// });


// Object.prototype.someNewMethod = () => 'This is the new function';

// // hasOwnProperty //
// console.log(product.someNewMethod());
// console.log(product);
