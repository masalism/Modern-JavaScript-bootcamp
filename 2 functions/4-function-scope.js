// Global scope (convertFahrenheitToCelsius, temp1, temp2)
    // Local scope (fahrenheit, celsius)
        // Local scope (isFreezing)

let convertFahrenheitToCelsius = function(temp) {
    let toCelsius = (temp -32) / 1.8

    if(celsius <= 0) {
        let isFreezing = true;
    }
    return toCelsius;
}

let temp1 = convertFahrenheitToCelsius(32)
let temp2 = convertFahrenheitToCelsius(89)
let temp3 = convertFahrenheitToCelsius(68)

console.log(temp1)
console.log(temp2)
console.log(temp3)