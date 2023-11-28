function BankAccount(accountNumber, name,type, balance){
    this.accountNumber = accountNumber
    this.name = name
    this.type  = type
    this.balance = balance
    this.active = true
}

  BankAccount.prototype.deposit = function(amount){
    this.balance+=amount
    console.log("you have deposited: ",this.balance)
  }

    BankAccount.prototype.withdraw = function(amount){
        if(amount<=this.balance){
            this.balance-=amount
        }else{
            console.log("you have insuffient amount!")
        }

        
    }
    BankAccount.prototype.checkBalance = function(){
        console.log("your balance is:", this.balance)
    }
    BankAccount.prototype.isActive = function(){
        if(this.balance>0){
            console.log("Account is active")
        }else{
            console.log("Account is not active") 
        }
    }
    function getTotalBalance(...acc) {
        return acc.reduce((totalSum, account) => {
          if (account.active == true) {
            return (totalSum += account.balance);
          }
          return totalSum;
        }, 0);
      }
      





let p1 =new BankAccount(1234343,"rajesh", "saving", 400)
let p2 =new BankAccount(12454343,"rajh", "saving", 800)
p1.deposit(100)
p1.withdraw(50)
p1.deposit(1000)
p1.withdraw(50)

p1.checkBalance()

let d = getTotalBalance(p1,p2)
console.log("Total balance of Backaccount",d)

