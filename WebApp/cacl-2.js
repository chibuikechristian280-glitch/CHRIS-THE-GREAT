const display = document.getElementById("display");
const history = document.getElementById("history");
const buttons = document.querySelector(".buttons");

let currentInput = "0";
let storedValue = null;
let operator = null;
let resetNext = false;
let errorState = false;

function updateDisplay() {
  display.textContent = currentInput;
}

function clearCalculator() {
  currentInput = "0";
  storedValue = null;
  operator = null;
  resetNext = false;
  errorState = false;

  history.textContent = "";
  updateDisplay();
}

function showError(message) {
  currentInput = "Error";
  storedValue = null;
  operator = null;
  resetNext = true;
  errorState = true;

  history.textContent = message;
  updateDisplay();
}

function formatResult(value) {
  if (!Number.isFinite(value)) {
    return null;
  }

  return String(Number(value.toPrecision(12)));
}

function enterNumber(number) {
  if (errorState) {
    clearCalculator();
  }

  if (resetNext) {
    currentInput = number;
    resetNext = false;
  } else if (currentInput === "0") {
    currentInput = number;
  } else if (currentInput === "-0") {
    currentInput = "-" + number;
  } else if (currentInput.length < 15) {
    currentInput += number;
  }

  updateDisplay();
}

function enterDecimal() {
  if (errorState) {
    clearCalculator();
  }

  if (resetNext) {
    currentInput = "0";
    resetNext = false;
  }

  if (!currentInput.includes(".")) {
    currentInput += ".";
  }

  updateDisplay();
}

function calculate(first, second, selectedOperator) {
  switch (selectedOperator) {
    case "+":
      return first + second;

    case "-":
      return first - second;

    case "*":
      return first * second;

    case "/":
      if (second === 0) {
        return null;
      }
      return first / second;

    default:
      return second;
  }
}

function operatorSymbol(value) {
  const symbols = {
    "+": "+",
    "-": "−",
    "*": "×",
    "/": "÷",
  };

  return symbols[value];
}

function chooseOperator(selectedOperator) {
  if (errorState) return;

  const value = Number(currentInput);

  if (operator !== null && !resetNext) {
    const result = calculate(storedValue, value, operator);

    const formatted = result === null ? null : formatResult(result);

    if (formatted === null) {
      showError("Cannot divide by zero");
      return;
    }

    currentInput = formatted;
    updateDisplay();
  }

  storedValue = Number(currentInput);
  operator = selectedOperator;
  resetNext = true;

  history.textContent = `${currentInput} ${operatorSymbol(operator)}`;
}

function showResult() {
  if (operator === null || resetNext || errorState) {
    return;
  }

  const first = storedValue;
  const second = Number(currentInput);
  const selectedOperator = operator;

  const result = calculate(first, second, selectedOperator);

  const formatted = result === null ? null : formatResult(result);

  if (formatted === null) {
    showError("Cannot divide by zero");
    return;
  }

  history.textContent = `${first} ${operatorSymbol(selectedOperator)} ${second} =`;

  currentInput = formatted;
  storedValue = null;
  operator = null;
  resetNext = true;

  updateDisplay();
}

function deleteLast() {
  if (errorState) {
    clearCalculator();
    return;
  }

  if (resetNext) return;

  if (currentInput.length > 1) {
    currentInput = currentInput.slice(0, -1);

    if (currentInput === "-") {
      currentInput = "0";
    }
  } else {
    currentInput = "0";
  }

  updateDisplay();
}

function convertPercentage() {
  if (errorState) return;

  const value = Number(currentInput) / 100;
  const formatted = formatResult(value);

  if (formatted === null) {
    showError("Invalid percentage");
    return;
  }

  currentInput = formatted;
  resetNext = false;
  updateDisplay();
}

function toggleSign() {
  if (errorState) return;

  if (currentInput !== "0") {
    currentInput = currentInput.startsWith("-")
      ? currentInput.slice(1)
      : "-" + currentInput;
  }

  resetNext = false;
  updateDisplay();
}

// Handle calculator button clicks
buttons.addEventListener("click", function (event) {
  const button = event.target.closest("button");

  if (!button) return;

  if (button.dataset.number !== undefined) {
    enterNumber(button.dataset.number);
    return;
  }

  if (button.dataset.operator) {
    chooseOperator(button.dataset.operator);
    return;
  }

  switch (button.dataset.action) {
    case "clear":
      clearCalculator();
      break;

    case "delete":
      deleteLast();
      break;

    case "decimal":
      enterDecimal();
      break;

    case "percent":
      convertPercentage();
      break;

    case "sign":
      toggleSign();
      break;

    case "equals":
      showResult();
      break;
  }
});

document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (/^[0-9]$/.test(key)) {
    enterNumber(key);
  } else if (key === ".") {
    enterDecimal();
  } else if (["+", "-", "*", "/"].includes(key)) {
    chooseOperator(key);
  } else if (key === "Enter" || key === "=") {
    event.preventDefault();
    showResult();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape") {
    clearCalculator();
  } else if (key === "%") {
    convertPercentage();
  }
});
