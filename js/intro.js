let stuDent = "Chris";
let studenT = "chibuike";

//operators in javascript
let x =5;

console.log(stuDent +"is"+ x + "years old."); // Addition

console.log("5" + 5 + 5); // Concatenation

//Introduction to Conoditional statements
let ValidAge = 18;
// strict equality operator loose equality operator
let user = true;

console.log(user == 1); // true
console.log(user === 1); // false



if (ValidAge >= 18) {
    console.log(stuDent + " is eligible to vote");
}else {
    console.log(stuDent + " is not eligible to vote");
}

//else if statement
let marks = 75;
if (marks >= 70) {
    console.log(stuDent + " has an A grade");
} else if (marks >= 60) {
    console.log(stuDent + " has a B grade");
} else {
    console.log(stuDent + " has a C grade");
}

//Switch statement
let day = 6;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}


//nested if statement
let Bread = "Radopin";

if (Bread === "Radopin") {
    let freshness = "Fresh";
    if (freshness === "Fresh") {
        console.log("The bread is fresh and ready to eat");
    }else {
        console.log("Bread is not available");
    }
} else {
    console.log("Bread is not available");
}


//ternary operator
let age = 20;
let eligibility = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
console.log(eligibility);


//Array in javascript
//Creating an array are of two ways
//1. Using array literal
let fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruits);


//2. Using array constructor
let vegetables = new Array("Carrot","Potato", "Tomato", "Cabbage");
console.log(vegetables);


//changing the value of an array element
fruits[1] = "Grapes";
console.log(fruits);


//Array Method
//1. push() method - adds an element to end of the array
fruits.push("Pineapple");
console.log(fruits);

//2. Pop() method - removes the last element of the array
fruits.pop();
console.log(fruits);

//3. shift() method -remove the first element of array
fruits.shift();
console.log(fruits);

//4. unshift() method - adds an element to the beginning of array
fruits.unshift();
console.log(fruits);

//other array methods
//5. indexOf() method - returns the index of the first
// occurrence of a specified value in array
let index = fruits.indexOf("Mango");
console.log(index); // Output: 2

//6. includes() methods - checks if an array
// contains a specified value
let hasBanan =fruits.includes("Banan");
console.log(hasBanan); // Output: false


//7. length property - returns the number of
// elements in an array
let length = fruits.length
console.log(length); // Output: 4

//8. slice() methods - returns a shallow copy of a portion
// of an array into a new array object
let SlicedFruits = fruits.slice(1, 3);
console.log(SlicedFruits); // Output: ['GRAPES', 'Mango']

//9. Map methods - creates a new array populated with thee results of
// calling a provided function on every element in the calling array

let numbers =[1, 2, 3, 4, 5];
let squaredNumbers =numbers.map(function (num){
    return num 
})
console.log(squaredNumbers); // Output:[1, 4, 9, 16, 25]


//10. Filter method - creates a new array with all elements that pass the test 
// implemented by the provided function

let evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]

//11. Reduce method - executes a reducer function on each element of the array,
// resulting in a single output value
let sum = numbers.reduce(function (accumulator, currenValue) {
return accumulator + currenValue;
});
console.log(sum); // Output: 15

//another example of  reduce method when checking for how many times a number appears in an array
let numArray = [1, 2, 3, 4, 5, 1, 2, 1];

let frequency = numArray.reduce(function (acc, curr) {
  acc[curr] = (acc[curr] || 0) +1;
  return acc;
}, {});

console.log(frequency); // Output: { '1': 3, '2': 2, '3': 1, '4': 1, '5': 1 }

//correcting index by adding 1  to the index
const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const dayIndex = 6;
const dayName = weekDays[dayIndex + 1]; // Adding 1 to correct the index
console.log(dayName); // Output: "Sunday"


//Spread Operator in Javascript
//The spread operator (...) allows an iterable such as an array or string to be
// expands in places where zero or more arguments (for function calls) or
// elements (for array literals) are expected, or an object expression to be expanded in places
// where zero or more key-value pairs (for object literals) are expected.
//Example of using the spread operator to copy an array
let originalArray = [1, 2, 3]

//Example of using the spread operator to merge two arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let mergedArray = [...array1, ...array2];
console.log(mergedArray); //Output: [1, 2, 3, 4, 5, 6]

//Example of using the spread operator to copy and update an array
let numbersArray = [1, 2, 3];
let updateArray = [...numbersArray, 4];
console.log(updateArray); // Output: [1, 2, 3, 4]



//rest operator in javascript
//The rest operator (...) allows us to represent an indefinite number of arguments as an array.
//Example of using the rest operator in a function

let a = [1,2,3,6];
let b = ["Chris", ...a]
console.log(b)


//Function in javascript
function greet(name) {
    console.log("Hello," + name + "!");
}
greet("Christian");

function greet(name) {
    console.log("Hello," + name + "!");
}
greet("Christian", 25);

//function with many parameters
function addNumbers(a, b) {
    return a + b;
    // let subtraction = a - b;
}
console.log(addNumbers(5, 10));

//function without parameters
function sayHello() {
    console.log("Hello");
}

//function with default parameters
function multiply(x, y = 1) {
    return x * y;
}
console.log(multiply(5, 10));
console.log(multiply(5)); // Uses default value for y

//another example of default parameters
function greetUser(name = "Guest") {
    console.log("Welcome," + name + "!");
    console.log(`Welcome, ${name}!`); //using baticks for the dispay of the message 
}
greetUser(); // Uses default value for name
greetUser("Christian"); // Overrides default value for name


//function expression
let _sayHello = function(){
    console.log("Hello");
};

_sayHello();

let add = function(a, b) {
    return a + b;
}
console.log(add(5, 10));


//Higher-order functions
// A higher-order function is a function that takes another function as
// an argument or returns a function as a result


//Example of a higher-order function that takes a function as an argument

function welcomeUser(actions){
    actions();
}
function displayWelcomeMessage() {
    console.log("Welcome, user!");
}

welcomeUser(displayWelcomeMessage);


// more examples of higher-order function
//food ordering system
function orderFood(food, callback) {
    console.log(` Ordering ${food}...`);
    callback();
}


function foodReady() {
    console.log("Your food is ready!");
}

orderFood("pizza", foodReady);


//SetTimeout is a built in higher order function in Javascript that 
//allows you to execute a function after a specified delay
//it takes two arguments: the function to be executed and the delay in milliseconds.

setTimeout(function(){
  console.log("Delay has passed");
},2000);

//Scope in Functions
//Scope referrs to the accessibility of variables and functions in different parts of your code.
//In Javascript, there are two types of scope:global scope and local scope.

//Global scope
let globalVariable="I am a global variable";
function globalScopeExample(){
  console.log(globalVariable);//Accessible here
}

//Local scope
function localScopeExample(){
  let localVariable="I am a local variable";
console.log(localVariable);//Accesible here
}
console.log(globalVariable);//Accessible here

localScopeExample();//This will log the local variable

//Block scope
if(true){
  let blockScopeVariable="I am block scoped";
  console.log(blockScopeVariable);//Accessible here
}


// Nested Scope
  function outerFunction() {
    let outerVariable = "I am from the outer function";
    function innerFunction() {
      let innerVariable = "I am from the inner function";
      console.log(outerVariable); // Accessible here
      console.log(innerVariable) // Accessible here
    }
    innerFunction();
    console.log(innerVariable); // Not Accessible here
  }

  //Closure in Functions
  //A closure in funtion that has access to its own scope, the outer function's scope,
  // and the global scope.
  // Closure are created every time a function is created, at the function creation time.

  //Example of a closure
  // example with a transaction counter
  function createTransactionCounter() {
  let InitialAmount = 5000;
  return addMoney = function(amount) {
    InitialAmount += amount;
    console.log(`New balance: ${InitialAmount}`);
   }
  }

let transactionCounter = createTransactionCounter();
transactionCounter(1000); // New balance: 6000
transactionCounter(500); // New balance: 6500

//Arrow Functions
//Arrow functions are a more concise way to write functions in Javascript. 
// They are often used for short, simple functions and callbacks.
const addition = (a, b) => a + b;
const square = (x) => x * x;



// Introduction to Objects in Javascript
//The ways of declaring an object in Javascript
//1. Using object literal
let person = {
  name: "Christian",
  age: 30,
  city: "New York",
}


//2. Using the object constructor
let person2 = new Object();
person2.name = "Chris";
person2.age = 25;
person2.city = "Los Angeles";
person2["country"] = "USA"; // Adding a new property using bracket notation

//Accessing object properties
console.log(person.name); // Output: Christian
console.log(person["age"]); // Output: 30
console.log(person2["country"]); // Output: USA


//Modifying object properties
person.age = 31;
// Person[1] = 32;
console.log(person.age);


//Nested Objects
let user = {
    name: "John",
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    }
};


//Object Methods
let Car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function() {
    console.log("Car started.");
  },
  stop: function() {
    console.log("Car stopped.");
  }
};
Car.start();
Car.stop();


//Object.keys() method - returns an array of a given object's own property names
let keys = Object.keys(Car);
console.log(keys); // Output: ['make', 'model', 'year', 'start', 'stop']

//Object.values() method - returns an array of a given object's own enumerable property values
let values = Object.values(Car);
console.log(values); // Output: ['Toyota', 'Camry', 2020, [Function: start], [Function: stop]]

//Object.entries() method - returns an array of a given object's own enumerable string-keyed property [key, value] pairs
let entries = Object.entries(Car);
console.log(entries); // Output: [['make', 'Toyota'], ['model', 'Camry'], ['year', 2020], ['start', [Function: start]], ['stop', [Function: stop]]]


//Object.assign() method - copies the values of all enumerable own properties from one or more source objects to a target object
// source object to a target object
let target = {};
let source = { b: 4, c: 5 };
let returnedTarget = Object.assign(target, source);
console.log(target); // Output: { b: 4, c: 5 }



//Object.freeze() method - freezes an object, freezing an object prevents new properties from being added to it
// and makes all existing properties read-only
let frozenObject = Object.freeze({ name: "Frozen" });
frozenObject.name = "Not Frozen"; // This will not change the name property
console.log(frozenObject.name); // Output: "Frozen"


//Object.seal() method - seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable
let sealedObject = Object.seal({ name: "Sealed" });
sealedObject.name = "Not Sealed"; // This will change the name property
console.log(sealedObject.name); // Output: "Not Sealed"


//Object.hasOwnProperty() method - returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it)
let hasProperty = person.hasOwnProperty("name");
console.log(hasProperty); // Output: true


//Object.is() method - determines whether two values are the same value
let isSame = Object.is(25, 25);
console.log(isSame); // Output: true


//Object.getPrototypeOf() method - returns the prototype
//  (i.e. the internal [[Prototype]] property) of the specified object
let prototype = Object.getPrototypeOf(person);
console.log(prototype); // Output: {}


//Object.setPrototypeOf() method - sets the prototype  (i.e. the internal [
// [Prototype]] property) of a specified object to another object or null
let newPrototype ={type: "Vehicle"};
Object.setPrototypeOf(Car, newPrototype);
console.log(Object.getPrototypeOf(Car)); // Output: { type: 'Vehicle' }



const Chris = "99" + 1
console.log(Chris); // Output: 991
const Chris2 = 99 + 1
console.log(Chris2); // Output: 100


const Chris3 = "99"
const number = parseInt(Chris3);
console.log(number); // Output: 99
console.log(number + 1); // Output: 100
