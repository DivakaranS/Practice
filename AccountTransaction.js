class Account {
    // Write your code here
    constructor(balance) {
        this.initialBalance = 10000;
    }
    debit(amount) {
        if (this.initialBalance >= amount) {
            this.initialBalance - amount;
            return true;
        } else {
            return false;
        }

    }
    credit(amount) {
        return this.initialBalance += amount; 

    }
    getBalance() {
        return this.initialBalance;
    }
}

const account = new Account();

console.log(account.credit(1000))
// console.log(account.debit(1000))
console.log(account.getBalance())
