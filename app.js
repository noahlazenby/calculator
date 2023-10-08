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
let inputtedValue;

//query display box and number buttons and set-up click function for numbers
const numberButtons = Array.from(document.querySelectorAll('.number'));
const operatorButtons = Array.from(document.querySelectorAll('.operator'));
const displayBox = document.querySelector('#display');
numberButtons.forEach((number) => {
    number.addEventListener("click", () => {
    inputtedValue = number.value;
    displayNumber(inputtedValue);
    });
});


function displayNumber(value) {
    displayBox.textContent = value;
};

function displaySolution(solution) {
    displayBox.textContent = solution;
};
