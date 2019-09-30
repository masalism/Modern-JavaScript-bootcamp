const account = {
    name: 'Mantas Masalis',
    expenses: [],
    income: [],
    addExpense: function (description, amout) {
        this.expenses.push({
            description: description,
            amount: amout
        })
    },
    addIncome: function(description, amount) {
        this.income.push( {
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount
        })
        this.income.forEach(function(income) {
            totalIncome = totalIncome + income.amount
        })
        let totalBalance = totalIncome - totalExpenses
        return `${this.name} has a balance of $${totalBalance}. $${totalExpenses} in expeneses. $${totalIncome} in income`
    }
}

// 1. add income array to account
// 2. add income method -> description
// 3. Tweak getAccount summary

account.addExpense('Rent', 950)
account.addExpense('Coffe', 2)
account.addIncome('Job', 1000)
account.addIncome('Robery', 1000000)
console.log(account.getAccountSummary())