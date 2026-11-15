const prompt = require("readline-sync").question;
class ATM{
    constructor(pin,balance){
        this.pin=pin;
        this.balance=balance;
    }
    checkBalance(pin){
        if(pin==this.pin)
            console.log("AMOUNT IN ACCOUNT: "+this.balance);
        else
            console.log("Invalid, Try Again... ");
    }withdraw(pin,amount){
        if(pin==this.pin){
            if(amount>0 && amount<=this.balance){
                this.balance-=amount;
                console.log("Amount after Withdrawl "+this.balance);
            }else
                console.log("Invalid Amount");
        }else{
            console.log("Invalid Pin");
        }
    }Deposit(pin,amount){
        if(pin==this.pin){
            if(amount>0){
                this.balance+=amount;
                console.log("Amount: "+this.balance);
            }else{
                console.log("Invalid Amount");
            }
        }else{
            console.log("Invalid Pin");
        }
    }ChangePin(old,newpin){
        if(old==this.pin){
            this.pin=newpin;
            console.log("Pin changed Successfully");
        }else{
            console.log("Invalid Pin");
        }
    }
}

let pin=Number(prompt("Enter Pin: "));
const balance=Number(prompt("Enter Amount: "));
const Person=new ATM(pin,balance);


Person.checkBalance(pin);

const withdrawal_pin=Number(prompt("Enter PIN: "));
const withdraw_amount=Number(prompt("Enter Withdrawal Amount: "));
Person.withdraw(withdrawal_pin,withdraw_amount);

const deposit_amount=Number(prompt("Enter Deposit Amount: "));
Person.Deposit(pin,deposit_amount);

const new_pin=Number(prompt("Enter New PIN : "))
Person.ChangePin(pin,new_pin);