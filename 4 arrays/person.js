const person = {
    name: 'Mantas',
    surname: 'Masalis',
    age: 29,
    expenses: [
        {
            description: 'car',
            price: 4500
        }, {
            description: 'taxes',
            price: 1000
        }, {
            description: 'food',
            price: 500
        }, {
            description: 'fuel',
            price: 70
        }
    ],
    income: [],
    notes: [
        {
            title: 'Job',
            body: 'Master JavaScript'
        }, {
            title: 'Meeting',
            body: 'Meet with Darius'
        }, {
            title: 'Vet',
            body: 'Get dog to the vet'
        }
    ],
    grades: [8, 9, 6, 2, 10, 10, 5, 4, 10],
    sortGrades: function (grades) {
        grades.sort(function (a, b) {
            return a - b
        })
    },
    deleteGrade: function () {
        this.grades.pop()
    },
    addGrade: function (grade) {
        this.grades.unshift(grade)
    },
    addExpense: function (description, price) {
        this.expenses.push({
            description: description,
            price: price
        })
    },
    addIncome: function (description, price) {
        this.income.push({
            description: description,
            price: price
        })
    },
    getBalanceSummary: function () {
        let totalIncome = 0
        let totalExpenses = 0
        let balance = 0

        this.expenses.forEach(function (expenses) {
            totalExpenses = totalExpenses + expenses.price
        })

        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.price
        })

        balance = totalIncome - totalExpenses

        return `${this.name} ${this.surname} has a balance of $${balance}. Expenses - ${totalExpenses}. Income - ${totalIncome}`
    }
}

const getGradesAverage = function (grades) {
    let gradesSum = 0
    grades.forEach(function (grades) {
        gradesSum = gradesSum + grades
    })
    const gradesAverage = gradesSum / grades.length
    return gradesAverage
}

const addGrade = function (grade) {
    person.grades.push(grade)
}

const addthreeNumbers = function (a, b, c) {
    return a + b + c
}

const ifYoung = function (age) {
    if (age < 18) {
        return `You are very young`
    } else if (age >= 18 && age <= 65) {
        return `Your are ${age} and it is cool`
    } else {
        return `Grandpa`
    }
}

console.log(ifYoung(person.age))

person.sortGrades(person.grades)
console.log(person.grades)

const addThree = addthreeNumbers(person.grades[1], person.grades[7], person.grades[5])

person.deleteGrade()
addGrade(10)
person.addGrade(5)

console.log(addThree)
console.log(getGradesAverage(person.grades))
console.log(person.grades)

const sortExpensesByDescription = function (person) {
    person.expenses.sort(function (a, b) {
        if (a.description.toLowerCase() < b.description.toLowerCase()) {
            return -1
        } else if (b.description.toLowerCase() < a.description.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

const sortExpensesByPrice = function (person) {
    person.expenses.sort(function (a, b) {
        if (a.price < b.price) {
            return -1
        } else if (b.price < a.price) {
            return 1
        } else {
            return 0
        }
    })
}

const sortGradesBySize = function (grades) {

}

const viewIncome = function () {
    console.log(person.income)
}

person.addIncome('Job', 10000)
person.addExpense('Video Games', 100)

viewIncome()

// sortExpensesByPrice(person)
sortExpensesByDescription(person)
console.log(person.expenses)
console.log(person.getBalanceSummary())
