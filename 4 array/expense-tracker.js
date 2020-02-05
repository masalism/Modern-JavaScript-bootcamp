const account = {
    name: 'Mantas',
    expenses: [],
    income: [],
    addExpense: function(description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        });
    },
    addIncome: function(description, amount) {
        this.income.push({
            description: description,
            amount: amount
        });
    },
    getAccountSummary: function() {
        // let total = 0;
        // for (let i = 0; i < this.expenses.length; i++) {
        //     total += this.expenses[i].amount;
        // }
        let totalExpenses = 0;
        let totalIncome = 0
        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount;
        });
        this.income.forEach(function(income) {
            totalIncome = totalIncome + income.amount;
        });
        let balance = totalIncome - totalExpenses; 
        return `${this.name} has a balance of $${balance}, in expenses ${totalExpenses}, in income ${totalIncome}`;
    }
}

account.addExpense('Rent', 950);
account.addExpense('Coffee', 2);
account.addIncome('Job', 10000);
account.addIncome('Project', 5);
console.log(account.expenses);
console.log(account.getAccountSummary());