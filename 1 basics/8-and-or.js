let temp = 55

// And && - true if everything is true
// Or || - at least one true

if (temp >= 60 && temp <=90) {
    console.log('it is pretty nice out')
} else if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside')
} else {
    console.log('Do what you want')
}

// CHALLENGE

let isGuestOneVegan = true
let isGuestTwoVegan = false

// Are both vegan? Only offer vegan dishes

// At least one vegan? Make sure to offet some vegan options

// Else, offer anything on a menu

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Offer only vegan food')
} else if (isGuestOneVegan  || isGuestTwoVegan ) {
    console.log('Make sure to offer vegan dishes')
} else {
    console.log('Offer anything')
}