function Transaction(amount) {
    let totalBalance = 500000;
    let amount = 1000000

    // check if the amount is greater than the total balance
    if (amount > totalBalance) {
        console.log("Insufficient funds");
    } else {
        totalBalance =totalBalance -= amount;
        console.log("Current Balance: " , totalBalance);
    }
    
}
