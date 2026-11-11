function calculator(num1, operator, num2) {
    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else if (operator === "/") {
        if (num2 === 0) {
            return "Error: Cannot divide by zero";
        }

        return num1 / num2;
    } else {
        return "Invalid operator";
    }
}

// Test the calculator
console.log(calculator(100, "+", 5)); // 105
console.log(calculator(900, "-", 5)); // 895
console.log(calculator(80, "*", 5)); // 400
console.log(calculator(70, "/", 5)); // 14

console.log(calculator(10, "/", 4));
// Error: Cannot divide by zero

console.log(calculator(10, "%", 4));
// Invalid operator