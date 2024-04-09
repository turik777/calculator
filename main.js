function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let firstNumber;
let secondNumber;
let operator;

function operate(firstNumber, secondNumber, operator) {
    return operator(firstNumber, secondNumber);
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

let value;

function displayZero() {
    display.textContent = 0;
    value = display.textContent;
    return value;
}

function displayOne() {
    display.textContent = 1;
    value = display.textContent;
    return value;
}

function displayTwo() {
    display.textContent = 2;
    value = display.textContent;
    return value;
}

function displayThree() {
    display.textContent = 3;
    value = display.textContent;
    return value;
}

function displayFour() {
    display.textContent = 4;
    value = display.textContent;
    return value;
}

function displayFive() {
    display.textContent = 5;
    value = display.textContent;
    return value;
}

function displaySix() {
    display.textContent = 6;
    value = display.textContent;
    return value;
}

function displaySeven() {
    display.textContent = 7;
    value = display.textContent;
    return value;
}

function displayEight() {
    display.textContent = 8;
    value = display.textContent;
    return value;
}

function displayNine() {
    display.textContent = 9;
    value = display.textContent;
    return value;
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