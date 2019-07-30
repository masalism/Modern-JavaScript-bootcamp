let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

// CHALLENGE
// person object, name, age, location
// increase age by one
// print 

let person = {
    name: 'Mantas',
    age: 29,
    location: 'Kaunas'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)

person.age = person.age + 1

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)


