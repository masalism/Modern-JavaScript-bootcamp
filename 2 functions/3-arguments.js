// Multiple arguments
let add = function (a, b, c) {
    return a + b + c;
}

let result = add(10, 1, 5);
console.log(result);

// Default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    return 'Name: ' + name + ' - Score: ' + score;
}

let scoreText = getScoreText(undefined, 99);
console.log(scoreText);

// Challenge
let getTip = function(total, tipPercent = 0.2) {
    return 'Total: ' + total + '. Tip percentage: ' + tipPercent + '. Tips: ' + (total * tipPercent);
}

let tip = getTip(100);
let tip2 = getTip(654, .5);
let tip3 = getTip(6876, .3);
console.log(tip);
console.log(tip2);
console.log(tip3);

