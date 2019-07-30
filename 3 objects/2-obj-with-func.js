let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

// CHALLENGE

// create finction - take fahrengheit - return an object with all three

let temps = function (fah) {
    return {
        fahrenheit: fah,
        celsius: (fah - 32) / 1.8,
        kelvin: (fah + 459.67) / 1.8
    }
}

let getTemp = temps(32)

console.log(getTemp.fahrenheit)
console.log(getTemp.celsius)
console.log(getTemp.kelvin)
