// function - input (argument), code, output (return value)

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()
greetUser()
greetUser()

let square = function (num) {
    let result = num * 3
    return result
}

let value = square(3)
let other = square(10)

console.log(value)
console.log(other)

// CHALLENGE //

// convertFahrenheitToCelsius

// Call a couple of times

// Print converted value

let convertFahrenheitToCelsius = function(temp) {
    let toCelsius = (temp -32) / 1.8
    return toCelsius;
}

let temp1 = convertFahrenheitToCelsius(32)
let temp2 = convertFahrenheitToCelsius(89)
let temp3 = convertFahrenheitToCelsius(68)

console.log(temp1)
console.log(temp2)
console.log(temp3)