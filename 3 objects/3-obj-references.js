let myAccount = {
    name: 'Mantas Masalis',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount;
    console.log(account);
}

let addIncome = function (account, amount) {
    account.income = account.income + amount;
    console.log(account);
}

let resetAccount = function (account) {
    account.expenses = 0;
    account.income = 0;
}

let getAccountSummary = function (account) {
    let balance = account.income - account.expenses;
    return `Account for ${account.name} has ${balance}. $${account.income} in income. $${account.expenses} in expenses`;
}

addIncome(myAccount, 2000);
addExpense(myAccount, 453);
addExpense(myAccount, 1654.3);
console.log( getAccountSummary(myAccount));
resetAccount(myAccount);
console.log( getAccountSummary(myAccount));

