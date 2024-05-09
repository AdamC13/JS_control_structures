let balance = 0;


function deposit(num){
    balance += num
}

function withdrawl(num){
    (balance > num) ? balance -= num : console.log("You don't have the funds")
}

function checkBalance(){
    console.log(balance)
}

checkBalance()
deposit(350)
checkBalance()
withdrawl(35)
checkBalance()
withdrawl(500)
checkBalance()