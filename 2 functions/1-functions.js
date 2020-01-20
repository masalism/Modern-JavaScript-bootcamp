// Function - input (arguments), code, output (return value)

let greetUser = function () {
    console.log('Welcome user');
}

greetUser();
greetUser();
greetUser();

let square = function (num) {
    let result = num * num;
    return result;
}

let value = square(3)
let otherValue = square(10)
console.log(value);
console.log(otherValue);

// convertFahreiheitToCelsius

let convertFahreiheitToCelsius = function (fah) {
    let celsius = (fah -32) / 1.8;
    return celsius;
}

let temp1 = convertFahreiheitToCelsius(90);
let temp2 = convertFahreiheitToCelsius(68);
console.log(temp1);
console.log(temp2);

