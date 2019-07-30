let name = '  Mantas Masalis '

// length property

console.log(name.length)

// Convert to uppercase

console.log(name.toUpperCase())

// Convert to lowercase

console.log(name.toLowerCase())

// Includes method

let password = 'abc123pasfdsf098'

console.log(password.includes('password'))

// Trim

console.log(name.trim())

//Challenge area

//isValidPassword

//lenght is more than 8 - and it doesnt contain the word password

let isValidPassword = function(pass) {
    // if (pass.length > 8 && !pass.includes('password')) {
    //     return true
    // } else {
    //     return false
    // }
    return pass.length > 8 && !pass.includes('password')
}

console.log(isValidPassword('abc123'))
console.log(isValidPassword('fhsdvsdnfjsdifjsd'))
console.log(isValidPassword('fsdfsdgpassword'))