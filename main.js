function addNumbers(a, b) {
    value = a + b;
    display.textContent = value;
    firstNumber = value;
}

function subtractNumbers(a, b) {
    value = a - b;
    display.textContent = value;
    firstNumber = value;
}

function multiplyNumbers(a, b) {
    value = a * b;
    display.textContent = value;
    firstNumber = value;
}

function divideNumbers(a, b) {
    value = a / b;
    display.textContent = value;
    firstNumber = value;
    if (value === Infinity) display.textContent = "What the heck are you doing?!";
}

let firstNumber;
let secondNumber;
let operator;

function operate(firstNumber, secondNumber, operator) {
    secondNumber = value;
    operator(firstNumber, secondNumber);
};

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
    if (value === 0) {
        display.textContent = "";
    }
    if (!display.textContent || display.textContent !== "0") display.textContent += 0;
    value = parseInt(display.textContent);
}

function displayOne() {
    if (value === 0) {
        display.textContent = "";
    }
    if (display.textContent === "0") {
        display.textContent = 1;
    } else {
        display.textContent += 1;
    }
    value = parseInt(display.textContent);
}

function displayTwo() {
    if (value === 0) {
        display.textContent = "";
    }
    if (display.textContent === "0") {
        display.textContent = 2;
    } else {
        display.textContent += 2;
    }    value = parseInt(display.textContent);
}

function displayThree() {
    if (value === 0) {
        display.textContent = "";
    }
    if (display.textContent === "0") {
        display.textContent = 3;
    } else {
        display.textContent += 3;
    }    value = parseInt(display.textContent);
}

function displayFour() {
    if (value === 0) {
        display.textContent = "";
    }
    if (display.textContent === "0") {
        display.textContent = 4;
    } else {
        display.textContent += 4;
    }    value = parseInt(display.textContent);
}

function displayFive() {
    if (value === 0) {
        display.textContent = "";
    }
    if (display.textContent === "0") {
        display.textContent = 5;
    } else {
        display.textContent += 5;
    }    value = parseInt(display.textContent);
}

function displaySix() {
    if (value === 0) {
        display.textContent = "";
    }
    if (display.textContent === "0") {
        display.textContent = 6;
    } else {
        display.textContent += 6;
    }    value = parseInt(display.textContent);
}

function displaySeven() {
    if (value === 0) {
        display.textContent = "";
    }
    if (display.textContent === "0") {
        display.textContent = 7;
    } else {
        display.textContent += 7;
    }    value = parseInt(display.textContent);
}

function displayEight() {
    if (value === 0) {
        display.textContent = "";
    }
    if (display.textContent === "0") {
        display.textContent = 8;
    } else {
        display.textContent += 8;
    }    value = parseInt(display.textContent);
}

function displayNine() {
    if (value === 0) {
        display.textContent = "";
    }
    if (display.textContent === "0") {
        display.textContent = 9;
    } else {
        display.textContent += 9;
    }    value = parseInt(display.textContent);
}

function addOperator() {
    if (firstNumber) {
        secondNumber = value;
    } else {
        firstNumber = value;
    }
    if (secondNumber && operator) operate(firstNumber, secondNumber, operator);
    operator = addNumbers;
    value = 0;
}

function subtractOperator() {
    if (firstNumber) {
        secondNumber = value;
    } else {
        firstNumber = value;
    }
    if (secondNumber && operator) operate(firstNumber, secondNumber, operator);
    operator = subtractNumbers;
    value = 0;
}

function multiplyOperator() {
    if (firstNumber) {
        secondNumber = value;
    } else {
        firstNumber = value;
    }
    if (secondNumber && operator) operate(firstNumber, secondNumber, operator);
    operator = multiplyNumbers;
    value = 0;
}

function divideOperator() {
    if (firstNumber) {
        secondNumber = value;
    } else {
        firstNumber = value;
    }
    if (secondNumber && operator) operate(firstNumber, secondNumber, operator);
    operator = divideNumbers;
    value = 0;
}

function displayClear() {
    display.textContent = "";
    value = null;
    firstNumber = value;
    secondNumber = value;
    operator = null;
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