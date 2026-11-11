// const display = document.getElementById("display");
// const previousDisplay = document.getElementById("previousDisplay");
// const buttons = document.querySelector(".buttons");

// let currentInput = "0";
// let previousInput = null;
// let operator = null;
// let shouldResetDisplay = false;
// let hasError = false;

// // Update the calculator screen
// function updateDisplay() {
//   display.value = currentInput;
// }

// // Clear the calculator
// function clearCalculator() {
//   currentInput = "0";
//   previousInput = null;
//   operator = null;
//   shouldResetDisplay = false;
//   hasError = false;

//   previousDisplay.textContent = "";
//   updateDisplay();
// }

// // Enter a number
// function enterNumber(number) {
//   if (hasError) {
//     clearCalculator();
//   }

//   if (shouldResetDisplay) {
//     currentInput = number;
//     shouldResetDisplay = false;
//   } else if (currentInput === "0") {
//     currentInput = number;
//   } else if (currentInput === "-0") {
//     currentInput = "-" + number;
//   } else {
//     currentInput += number;
//   }

//   updateDisplay();
// }

// // Enter a decimal point
// function enterDecimal() {
//   if (hasError) {
//     clearCalculator();
//   }

//   if (shouldResetDisplay) {
//     currentInput = "0";
//     shouldResetDisplay = false;
//   }

//   if (!currentInput.includes(".")) {
//     currentInput += ".";
//   }

//   updateDisplay();
// }

// // Calculate two numbers
// function calculate(first, second, selectedOperator) {
//   switch (selectedOperator) {
//     case "+":
//       return first + second;

//     case "-":
//       return first - second;

//     case "*":
//       return first * second;

//     case "/":
//       if (second === 0) {
//         return null;
//       }
//       return first / second;

//     default:
//       return second;
//   }
// }

// // Format the result
// function formatResult(number) {
//   if (!Number.isFinite(number)) {
//     return null;
//   }

//   return String(Number(number.toPrecision(12)));
// }

// // Select an operator
// function chooseOperator(selectedOperator) {
//   if (hasError) return;

//   const currentNumber = Number(currentInput);

//   if (operator && !shouldResetDisplay) {
//     const result = calculate(previousInput, currentNumber, operator);

//     const formatted = result === null ? null : formatResult(result);

//     if (formatted === null) {
//       showError();
//       return;
//     }

//     currentInput = formatted;
//     updateDisplay();
//   }

//   previousInput = Number(currentInput);
//   operator = selectedOperator;
//   shouldResetDisplay = true;

//   previousDisplay.textContent = `${currentInput} ${getOperatorSymbol(operator)}`;
// }

// // Display mathematical symbols
// function getOperatorSymbol(selectedOperator) {
//   const symbols = {
//     "+": "+",
//     "-": "−",
//     "*": "×",
//     "/": "÷",
//   };

//   return symbols[selectedOperator];
// }

// // Show the final answer
// function showResult() {
//   if (operator === null || shouldResetDisplay || hasError) {
//     return;
//   }

//   const first = previousInput;
//   const second = Number(currentInput);
//   const selectedOperator = operator;

//   const result = calculate(first, second, selectedOperator);
//   const formatted = result === null ? null : formatResult(result);

//   if (formatted === null) {
//     showError();
//     return;
//   }

//   previousDisplay.textContent = `${first} ${getOperatorSymbol(selectedOperator)} ${second} =`;

//   currentInput = formatted;
//   previousInput = null;
//   operator = null;
//   shouldResetDisplay = true;

//   updateDisplay();
// }

// // Show an error for invalid calculations
// function showError() {
//   currentInput = "Error";
//   previousInput = null;
//   operator = null;
//   shouldResetDisplay = true;
//   hasError = true;

//   previousDisplay.textContent = "Cannot divide by zero";
//   updateDisplay();
// }

// // Delete the last character
// function deleteLast() {
//   if (hasError) {
//     clearCalculator();
//     return;
//   }

//   if (shouldResetDisplay) {
//     return;
//   }

//   if (currentInput.length > 1) {
//     currentInput = currentInput.slice(0, -1);

//     if (currentInput === "-") {
//       currentInput = "0";
//     }
//   } else {
//     currentInput = "0";
//   }

//   updateDisplay();
// }

// // Convert to a percentage
// function convertPercentage() {
//   if (hasError) return;

//   const result = Number(currentInput) / 100;
//   const formatted = formatResult(result);

//   if (formatted === null) {
//     showError();
//     return;
//   }

//   currentInput = formatted;
//   shouldResetDisplay = false;
//   updateDisplay();
// }

// // Change positive to negative or negative to positive
// function toggleSign() {
//   if (hasError) return;

//   if (currentInput !== "0") {
//     currentInput = currentInput.startsWith("-")
//       ? currentInput.slice(1)
//       : "-" + currentInput;
//   }

//   shouldResetDisplay = false;
//   updateDisplay();
// }

// // Listen for button clicks
// buttons.addEventListener("click", function (event) {
//   const button = event.target.closest("button");

//   if (!button) return;

//   if (button.dataset.number !== undefined) {
//     enterNumber(button.dataset.number);
//     return;
//   }

//   if (button.dataset.operator) {
//     chooseOperator(button.dataset.operator);
//     return;
//   }

//   switch (button.dataset.action) {
//     case "clear":
//       clearCalculator();
//       break;

//     case "delete":
//       deleteLast();
//       break;

//     case "decimal":
//       enterDecimal();
//       break;

//     case "percent":
//       convertPercentage();
//       break;

//     case "sign":
//       toggleSign();
//       break;

//     case "equals":
//       showResult();
//       break;
//   }
// });
