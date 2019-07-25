// Lexical Scope (static Scope)
// Global scope - defined outside of all code blocks
// Local scope - defined inside a code block

// Global scope (varOne)
  //Loccal sope (varTwo)
    //LocalScope (varFour)
  //Loccal sope (varThree)

let varOne = 'varOne'

if (true) {
    console.log(varOne)
    let varTwo = 'vartwo'
    console.log(varTwo)

    if (true) {
        let varFour = 'varFour'
    }
}

if (true) {
    let varThree = 'varThree'
}

console.log(varTwo)