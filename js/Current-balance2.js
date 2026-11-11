// let balance = 55000;

// function transaction(amount) {
//     balance = balance + amount; 
//      // Reassignment happens here
//     console.log("Transaction successful");
// }

// function currentBalance() {
//     console.log("Current balance: " + balance);
// }

// currentBalance();

// transaction(10000);

// currentBalance();




let balance = 0;

// Add money to balance
function deposit(amount) {
    balance = balance + amount;
    console.log("Deposit successful: ₦" + amount);
}

// Check current balance
function currentBalance() {
    console.log("Current balance: ₦" + balance);
}

currentBalance();

deposit(111000);
currentBalance();

deposit(55500);
currentBalance();


function availablebalance(amount){
    let balance=0;
    balance=balance+amount
    console.log("Added:",balance)
}
availablebalance(600000)