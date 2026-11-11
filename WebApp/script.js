// 1. PAYSTACK CONFIGURATION

// Store the Paystack public key
const PAYSTACK_PUBLIC_KEY = "pk_test_3f1aa7929df6c1308a7284db52685a3d1197316f";

// 2. SELECT HTML ELEMENTS
// Get HTML elements using their IDs
const totalSales = document.getElementById("totalSales");
const totalOrders = document.getElementById("totalOrders");
const transactionList = document.getElementById("transactionList");
const message = document.getElementById("message");

// 3. GET TRANSACTIONS
function getTransactions() {
    // Get saved transactions from localStorage
    // JSON.parse converts the saved string into JavaScript data
    // || [] returns an empty array if no transactions exist
    return JSON.parse(localStorage.getItem("transactions")) || [];
}


// 4. SAVE TRANSACTIONS
function saveTransactions(transactions) {
    // Convert the transactions array into a JSON string
    // Save the string in localStorage under the key "transactions"
    localStorage.setItem("transactions", JSON.stringify(transactions));
}

// 5. FORMAT CURRENCY
function formatCurrency(amount) {
    // Format numbers as Nigerian Naira
    return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
    }).format(amount);
}


// 6. UPDATE DASHBOARD STATISTICS
function updateDashboard() {
    // Get all saved transactions
    const transactions = getTransactions();

    // Filter the array to get only successful transactions
    const successfulTransactions = transactions.filter(
        (transaction) => transaction.status === "success",
    );

    // Add the amounts of all successful transactions
    const sales = successfulTransactions.reduce(
        (total, transaction) => total + transaction.amount,
        0,
    );

    // Display the total sales on the dashboard
    totalSales.textContent = formatCurrency(sales);

    // Display the number of successful orders
    totalOrders.textContent = successfulTransactions.length;
}


// 7. DISPLAY TRANSACTIONS
function displayTransactions() {
    // Get all saved transactions
    const transactions = getTransactions();

    // Clear existing transaction rows
    transactionList.innerHTML = "";

    // Check whether the transaction array is empty
    if (transactions.length === 0) {
        // Display an empty-state message
        message.textContent = "No transactions yet.";

        // Stop the function if there are no transactions
        return;
    }

    // Clear the empty-state message
    message.textContent = "";

    // Loop through each transaction
    transactions.forEach((transaction) => {
        // Create a new table row
        const row = document.createElement("tr");

        // Insert transaction details into the row
        row.innerHTML = `
      <td>${transaction.product}</td>
      <td>${formatCurrency(transaction.amount)}</td>
      <td>${transaction.reference}</td>
      <td>
        <span class="success">${transaction.status}</span>
      </td>
    `;

        // Add the row to the transaction table
        transactionList.appendChild(row);
    });
}

// 8. BUY PRODUCT / PROCESS PAYMENT
async function buyProduct(productName, amount) {
    try {
        // Create a Paystack checkout instance
        const paystack = new PaystackPop();

        // Open the Paystack checkout interface
        await paystack.checkout({
            // Pass the Paystack public key
            key: PAYSTACK_PUBLIC_KEY,

            // Customer email address
            email: "customer@example.com",

            // Convert Naira to Kobo (Paystack's smallest currency unit)
            amount: amount * 100,

            // Specify the transaction currency
            currency: "NGN",

            // Callback: runs when checkout reports a successful payment
            onSuccess: (transaction) => {
                // Create an object containing the new transaction details
                const newTransaction = {
                    product: productName,
                    amount: amount,
                    reference: transaction.reference,
                    status: "success",
                };

                // Retrieve previously saved transactions
                const transactions = getTransactions();

                // Add the new transaction to the array
                transactions.push(newTransaction);

                // Save the updated transaction array
                saveTransactions(transactions);

                // Recalculate dashboard statistics
                updateDashboard();

                // Refresh the transaction table
                displayTransactions();

                // Notify the customer
                alert("Payment successful!");
            },

            // Callback: runs when the customer cancels checkout
            onCancel: () => {
                // Notify the customer
                alert("Payment was cancelled.");
            },
        });
    } catch (error) {
        // Log the error for debugging
        console.log("Payment error:", error);

        // Display an error message to the customer
        alert("Something went wrong: " + error.message);
    }
}



// 9. LOAD DASHBOARD
// Calculate and display dashboard statistics
updateDashboard();
// Display previously saved transactions
displayTransactions();