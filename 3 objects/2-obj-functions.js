let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
};

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
};

let getSUmmary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    };
}

let bookSummary = getSUmmary(myBook);
let otherBookSummary = getSUmmary(otherBook);

console.log(bookSummary.pageCountSummary);

// Challenge

let getTempSummary = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celsius: (fahrenheit -32) / 1.8,
        kelvin: (fahrenheit + 459.67) / 1.8
    }
}

let tempSummary1 = getTempSummary(74);
let tempSummary2 = getTempSummary(68);
let tempSummary3 = getTempSummary(65);
let tempSummary4 = getTempSummary(99);

console.log(tempSummary1);
console.log(tempSummary2);
console.log(tempSummary3);
console.log(tempSummary4);