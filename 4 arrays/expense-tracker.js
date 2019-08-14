const account = {
    name: 'Mantas Masalis',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalIncome = 0
        let totalExpenses = 0
        let accountBalance = 0

        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.amount
        })

        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount
        })
        accountBalance = totalIncome - totalExpenses

        return `${this.name} has a balance of $${accountBalance}. $${totalIncome} income. $${totalExpenses} in expenses`
    }
}

// 1. add income array to account
// 2. addIncome method -> description. amount
// 3. Tweak getAccountSummary

// Mantas Masalis has a ablance of $10. $100 incone. 90$ in expenses

account.addExpense('Rent', 950)
account.addExpense('Coofee', 2)

account.addIncome('Job', 1000)
account.addIncome('Nothing', 10)

console.log(account.getAccountSummary())
console.log(account.income)
