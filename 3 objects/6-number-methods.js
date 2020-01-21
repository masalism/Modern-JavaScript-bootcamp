let num = 103.941;

console.log(num.toFixed(2));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

let min = 10;
let max = 20;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
// 0 - .99999999

console.log(randomNum);

// Challenge

let makeGuess = function(guess) {
    let min = 1;
    let max = 5;
    let randomGuess = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomGuess === guess;
}

console.log(makeGuess(5));
