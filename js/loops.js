//Introduction to Loops in Javascript
//Loops are used to execute a block of code repeatedly until a specified condition is met.

//1. For Loop
//we use a For Loop when we know the amount of iterations we want to perform.
// It consists of three parts: initializtion, condition, and increment/decrement.


for (let i = 0; i < 5; i++) {
  console.log("For Loop iteration: " + i);
}

//another example of a For Loop that iterates through an array
let fruits = ["apple", "banana", "cherry"];

console.log(fruits[0]); // Output: apple


for (let i = 0; i < fruits.length; i++) {
  console.log("For Loop iteration: " + fruits[i]);
}

let name = "Anthony";

console.log(name.length);

//Building of times table with for loop
let x = 5;

for(let i = 1; i <= 12; i++ ) {
  let calculation = i * x;
    console.log(`${i} X ${x} = ${calculation}`)
}



// While Loop
//It is being used when we don't know how many times to iterate but we know when to stop

const number = 7
let i = 1

while (i <= 12) {
  let calculation = i * number;
  console.log(`${number} x ${i} = ${calculation}`);
  i++;
}


// another example
let hoursOfLecture = 2;

while (hoursOfLecture > 0 ) {
  console.log(`The time remains ${hoursOfLecture} hour(s) to end`);
  hoursOfLecture--;
}
console.log("Class has come to an end");



// Do While Loop
//This is a type loop that runs once before checking the codition
// Example 1

let password;
let attempts = 0;

do{
    password = "1234";
    attempts++;
    console.log(`attempt ${attempts} : Pin entered`);
} while (password !== "CorrectPin" && attempts < 3);


//Another example 
let passenger = 0;
const maxSeats = 14;

do {
    passenger++;
    console.log(`Passenger ${passenger} don pay`);
} while (passenger < maxSeats);


//for...of

const subjects = ["English", "Maths", "Physics", "Chemistry"];

for (const subject of subjects) {
  console.log(`Read ${subject} tonight`);
}

const State = "LAGOS";

for(let letter of State) {
  console.log(`Looping through the letters: ${letter}`);
}

//for...in

const student = {
  name: "Chris",
  age: 20,
  school: "UNILAG",
};

for (const key in student) {
  console.log(`${key}: ${student[key]}`);
}

//For Each
const customers = ["Ada", "Chris", "Charlie", "Diana"];

customers.forEach((name, index) => {
  console.log(`Customer ${index + 1}: ${name}`);
});
const transportfair = ["500", "1200", "350", "1500"];

transportfair.forEach((price) => {
  console.log(`this user boarded for: ${price}`);

});

//break and continue
//The break statement is used to exit a loop before it has completed all its iterations. 
//The continue statement is used to skip the current iteration of a loop and move on to the next one.

for (let seat = 1; seat <= 10 ; seat++ ) {
  if (seat === 4) continue;
    console.log(`Seat ${seat} occupied`)
}
