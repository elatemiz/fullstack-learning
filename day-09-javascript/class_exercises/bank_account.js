class BankAccount {
    constructor(owner, balance){
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount){
        this.balance += amount;
    }
    withdraw(amount){
        if(this.balance < amount)
            console.log(`You can only withdraw ${this.balance} amount of money!`)
        else{
            this.balance -= amount;
        }
    }
    getBalance(){
        return console.log(`Current Balance: ${this.balance}`);
    }
}

const account = new BankAccount(
    "Ela",
    5000
);

account.deposit(1000);
account.getBalance();
account.withdraw(5000);
account.getBalance();