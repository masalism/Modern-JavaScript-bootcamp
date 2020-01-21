let name = '            Mantas Masalis    ';

// Length property
console.log(name.length);

// Convert to uppercase
name.toUpperCase();
console.log(name.toUpperCase());

// Convert to lower case

console.log(name.toLowerCase());

// Includes method
let password = 'fdshfksdfjslfds';
console.log(password.includes('password'));

// Trim
console.log(name.trim());

let isValidPassword = function (password) {
    // if (password.length < 9) {
    //     return `Your password is to short`;
    // } else if (password.includes('password')) {
    //     return `Your password contains password`;
    // } else {
    //     return 'Your password is good';
    // }
    return password.length > 8 && !password.includes('password');
}

console.log(isValidPassword('gfdgfg'));
console.log(isValidPassword('abc12342546hgfdsfg'));
console.log(isValidPassword('fdsfhsdjkgdspasswordgfdsgfd'));