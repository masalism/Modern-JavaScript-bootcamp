// Global scope (convertFahreiheitToCelsius, tempOne, tempTwo)
    // Local Scope (fah, celsius)
        // Local scopre (isFreezing)
let convertFahreiheitToCelsius = function (fah) {
    let celsius = (fah -32) / 1.8;

    if (celsius <= 0) {
        let isFreezing = true;
    }
    
    return celsius;
}

let tempOne = convertFahreiheitToCelsius(90);
let tempTwo = convertFahreiheitToCelsius(68);



console.log(tempOne);
console.log(tempTwo);