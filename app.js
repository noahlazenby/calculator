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
    if (b === 0) {
        return "Seriously... You know you can't divide by 0"
    } 
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
let firstInputtedNumber = '';
let secondInputtedNumber = '';
let inputtedOperator;
let solution;

//query display box and number buttons and set-up click function for numbers
const numberButtons = Array.from(document.querySelectorAll('.number'));
const operatorButtons = Array.from(document.querySelectorAll('.operator'));
const equalsButton = document.querySelector('#equals');
const decimalButton = document.querySelector('#decimal');
const clearButton = document.querySelector('#clear');
const displayBox = document.querySelector('#display');
numberButtons.forEach((number) => {
    number.addEventListener("click", () => {
        if (solution == null) {
            if (inputtedOperator == null) {
                if (number.value == ".") { decimalButton.disabled = true; }
                firstInputtedNumber += number.value;
                displayNumber(firstInputtedNumber);
            } else {
                secondInputtedNumber += number.value;
                displayNumber(secondInputtedNumber);
            }
        } else {
            firstInputtedNumber = solution;
            secondInputtedNumber += number.value;
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
    inputtedOperator = null;
    firstInputtedNumber = '';
    secondInputtedNumber = '';
    decimalButton.disabled = false;
});

clearButton.addEventListener("click", () => {
    firstInputtedNumber = '';
    secondInputtedNumber = '';
    inputtedOperator = null;
    solution = null;
    displayBox.textContent = "0";
    decimalButton.disabled = false;
});

function displayNumber(value) {
    displayBox.textContent = value;
};

function displaySolution(solution) {
    displayBox.textContent = solution;
};
