let balance = 55000;

// Function to make a transaction
function transaction(amount) {
    balance = balance - amount;
    console.log("Transaction successful");
}

// Function to check current balance
function currentBalance() {
    console.log("Current balance: " + balance);
}

// Check balance
currentBalance();

// Make a transaction
transaction(10000);

// Check balance again
currentBalance();