const products = [{
    name: 'Computer mouse'
}]
const product = products[0]

// Truthy - Values that resolve to true in boolean context
// Flasy - Values that resolve to false in boolean context
// Falsy values = false, 0, empty string, undefined, NaN

if (product) {
    console.log('product found')
} else {
    console.log('not found')
}