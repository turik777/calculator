function addNumbers(a, b) {
    value = a + b;
    display.textContent = value;
}

function subtractNumbers(a, b) {
    value = a - b;
    display.textContent = value;
}

function multiplyNumbers(a, b) {
    value = a * b;
    display.textContent = value;
}

function divideNumbers(a, b) {
    value = a / b;
    display.textContent = value;
}

let firstNumber;
let secondNumber;
let operator;

function operate() {
    secondNumber = value;
    if (operator === "addNumbers") return addNumbers(firstNumber, secondNumber);
    if (operator === "subtractNumbers") return subtractNumbers(firstNumber, secondNumber);
    if (operator === "multiplyNumbers") return multiplyNumbers(firstNumber, secondNumber);
    if (operator === "divideNumbers") return divideNumbers(firstNumber, secondNumber);
}

const display = document.querySelector("#display");
const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");

let value;

function displayZero() {
    display.textContent += 0;
    value = parseInt(display.textContent);
}

function displayOne() {
    display.textContent += 1;
    value = parseInt(display.textContent);
}

function displayTwo() {
    display.textContent += 2;
    value = parseInt(display.textContent);
}

function displayThree() {
    display.textContent += 3;
    value = parseInt(display.textContent);
}

function displayFour() {
    display.textContent += 4;
    value = parseInt(display.textContent);
}

function displayFive() {
    display.textContent += 5;
    value = parseInt(display.textContent);
}

function displaySix() {
    display.textContent += 6;
    value = parseInt(display.textContent);
}

function displaySeven() {
    display.textContent += 7;
    value = parseInt(display.textContent);
}

function displayEight() {
    display.textContent += 8;
    value = parseInt(display.textContent);
}

function displayNine() {
    display.textContent += 9;
    value = parseInt(display.textContent);
}

function addOperator() {
    display.textContent = "";
    operator = "addNumbers";
    firstNumber = value;
    value = 0;
}

function subtractOperator() {
    display.textContent = "";
    operator = "subtractNumbers";
    firstNumber = value;
    value = 0;
}

function multiplyOperator() {
    display.textContent = "";
    operator = "multiplyNumbers";
    firstNumber = value;
    value = 0;
}

function divideOperator() {
    display.textContent = "";
    operator = "divideNumbers";
    firstNumber = value;
    value = 0;
}

function displayClear() {
    display.textContent = "";
    value = 0;
}

zero.addEventListener("click", displayZero);
one.addEventListener("click", displayOne);
two.addEventListener("click", displayTwo);
three.addEventListener("click", displayThree);
four.addEventListener("click", displayFour);
five.addEventListener("click", displayFive);
six.addEventListener("click", displaySix);
seven.addEventListener("click", displaySeven);
eight.addEventListener("click", displayEight);
nine.addEventListener("click", displayNine);
add.addEventListener("click", addOperator);
subtract.addEventListener("click", subtractOperator);
multiply.addEventListener("click", multiplyOperator);
divide.addEventListener("click", divideOperator);
equals.addEventListener("click", () => operate(firstNumber, secondNumber, operator));
clear.addEventListener("click", displayClear);