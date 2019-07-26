// Multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Default arguments
let getScoreText = function(name = 'Annonymous', score = 0) {
    return 'Name: ' + name + ' ' + '- Score: ' + score
}

let scoreText = getScoreText(undefined, 100)
console.log(scoreText)

// CHALLENGE

// getTip, total, percentageTip .2
// 

let getTip = function(total, tipPercentage = .2) {
    return total * tipPercentage
} 

let tips = getTip(79, .1)
console.log(tips)