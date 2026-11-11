// let usernames = ["chris", "john", "mary", "david"];

// let newUsername = "chris";

// if (usernames.includes(newUsername)) {
//     console.log("Username is not available");
// } else {
//     console.log("Username is available");
// }



let usernames = ["chris", "john", "mary", "david"];

function checkUsername(username) {
    if (usernames.includes(username)) {
        console.log(username + " is not available");
    } else {
        console.log(username + " is available");
    }
}

checkUsername("chris");
checkUsername("peter");



//rest operator in javascript
//The rest operator (...) allows us to represent an indefinite number of arguments as an array.
//Example of using the rest operator in a function

let a = [1,2,3,6];
let b = ["Chris", ...a]
console.log(b)

PackedItems = [1, 2, 3, 4, 5];

//Spread operator in javascript
//The spread operator (...) allows us to expand an array into individual elements.
//Example of using the spread operator in a function

let cartItems = [1, 2, 3, 4, 5];
let cart = [...cartItems, 6, 7, 8];
console.log("Items in my cart:", cart);

//ForEach
let sumItems = [1, 2, 3, 4, 5];

sumItems.forEach((item) => sumItems += item);{
    console.log("Sum of items in my cart:", sumItems);
};

// CartLog
let  WirstWatchPrice = 0
let quantity = [1, 2, 3]

quantity.forEach((tot) => WirstWatchPrice += item * 100);{
    console.log("Total price of items in my cart:", WirstWatchPrice);
}

// Filter
let filters