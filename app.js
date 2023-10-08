let firstNum;
let operator;
let secondNum;

//basic calculator functions
function add(a, b) {
    return a+b
};

function subtract(a, b) {
    return a-b
};

function multiply(a, b) {
    return a*b;
};

function divide(a, b) {
    return a/b
};

//handling user inputted operations
function operate(firstNum, operator, secondNum) {
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    if (operator == '+') {
        return add(firstNum, secondNum)
    } else if (operator == '-') {
        return subtract(firstNum, secondNum)
    } else if (operator == '*') {
        return multiply(firstNum, secondNum)
    } else if (operator == '/') {
        return divide(firstNum, secondNum)
    } else {
        return "Please enter a valid operation"
    }
};
//initialize value to display in display box 
let firstInputtedNumber;
let secondInputtedNumber;
let inputtedOperator;
let solution;

//query display box and number buttons and set-up click function for numbers
const numberButtons = Array.from(document.querySelectorAll('.number'));
const operatorButtons = Array.from(document.querySelectorAll('.operator'));
const equalsButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');
const displayBox = document.querySelector('#display');
numberButtons.forEach((number) => {
    number.addEventListener("click", () => {
        if (firstInputtedNumber == null) {
            firstInputtedNumber = number.value;
            displayNumber(firstInputtedNumber);
        } else {
            secondInputtedNumber = number.value;
            displayNumber(secondInputtedNumber);
        }
    });
});

operatorButtons.forEach((operator) => {
    operator.addEventListener("click", () => {
        inputtedOperator = operator.value;
    });
});

equalsButton.addEventListener("click", () => {
    solution = operate(firstInputtedNumber, inputtedOperator, secondInputtedNumber);
    displaySolution(solution);
});

clearButton.addEventListener("click", () => {
    firstInputtedNumber = null;
    secondInputtedNumber = null;
    inputtedOperator = null;
    solution = null;
    displayBox.textContent = "0";
});

function displayNumber(value) {
    displayBox.textContent = value;
};

function displaySolution(solution) {
    displayBox.textContent = solution;
};
