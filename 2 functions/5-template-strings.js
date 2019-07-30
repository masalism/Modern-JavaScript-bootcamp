// Multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Default arguments
let getScoreText = function (name = 'Annonymous', score = 0) {
    return `Name: ${name} - Socre: ${score}`
    //return 'Name: ' + name + ' ' + '- Score: ' + score
}

let scoreText = getScoreText(undefined, 100)
console.log(scoreText)

// CHALLENGE

// A 25% tip on $40 would be $10

let getTip = function (total, tipPercentage = .2) {
    let tips = total * tipPercentage
    let tipPer = tipPercentage * 100
    // return `a ${tipPercentage * 100}% tip on $${total} would be $${total *tipPercentage}`
    return `a ${tipPer}% tip on $${total} would be $${tips}`
}

let tips = getTip(40, .1)
console.log(tips)

//Template strings

// let name = 'Mantas'
// let age = 29
// console.log(`Hey, my name is ${name}! I am ${age} years old`)