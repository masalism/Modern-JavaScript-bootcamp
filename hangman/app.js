const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
let game1;

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    render();
});

const render = () => {
    puzzleEl.textContent = game1.puzzle;
    guessesEl.textContent = game1.statusMessage;
}

const startGame = async () => {
    const puzzle = await getPuzzle('2');
    game1 = new Hangman(puzzle, 5);
    render();
}

document.querySelector('#reset').addEventListener('click', startGame);

startGame();










// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle);
// }).catch((err) => {
//     console.log(`Error: ${err}`);
// });



// getCountry('MX').then((country) => {
//     console.log(country.name);
// }).catch((err) => {
//     console.log(`Error: ${err}`);
// });

// getLocation().then((location) => {
//     return getCountry(location.country)
// }).then((country) => {
//     console.log(country.name)
// }).catch((err) => {
//     console.log(err);
// });

// fetch('http://puzzle.mead.io/puzzle', {}).then((response) =>{
//     if (response.status === 200) {
//         return response.json()
//     } else {
//         throw new Error('Unable to fetch the puzzle');
//     }
// }).then((data)=> {
//     console.log(data.puzzle)
// }).catch((error) => {
//     console.log(error);
// });

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
