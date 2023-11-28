
function BankAccount(accountNumber, name,type, balance){
    this.accountNumber = accountNumber
    this.name = name
    this.type  = type
    this.balance = balance
    this.deposit = function(amount){
    this.balance+=amount
    // console.log(this.balance)
    }
    this.withdraw = function(amount){
        if(amount<=this.balance){
            this.balance-=amount
        }else{
            console.log("you have insuffient amount!")
        }

        
    }
    this.checkBalance = function(){
        console.log(this.balance)
    }
    this.isActive = function(){
        if(this.balance>0){
            return true
        }else{
            return false
        }
    }


}



let p1 =new BankAccount(1234343,"rajesh", "saving", 400)
p1.deposit(100)
p1.withdraw(50)
p1.checkBalance()
console.log(p1.isActive())
