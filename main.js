function addNumbers(a, b) {
    value = Math.round((a + b) * 1000000) / 1000000;
    display.textContent = value;
    firstNumber = value;
}

function subtractNumbers(a, b) {
    value = Math.round((a - b) * 1000000) / 1000000;
    display.textContent = value;
    firstNumber = value;
}

function multiplyNumbers(a, b) {
    value = Math.round((a * b) * 1000000) / 1000000;
    display.textContent = value;
    firstNumber = value;
}

function divideNumbers(a, b) {
    value = Math.round((a / b) * 1000000) / 1000000;
    display.textContent = value;
    firstNumber = value;
    if (value === Infinity) display.textContent = "Are you ok?!";
}

let firstNumber;
let secondNumber;
let operator;

function operate(firstNumber, secondNumber, operator) {
    secondNumber = value;
    operator(firstNumber, secondNumber);
    if (value > 99999999999999 && value !== Infinity) return display.textContent = "Too large!";
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
const float = document.querySelector("#float");
const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const equals = document.querySelector("#equals");
const backspace = document.querySelector("#backspace");
const clear = document.querySelector("#clear");

let value = 0;

function displayZero() {
    if (value === 0) {
        display.textContent = "";
    }
    if (!display.textContent || display.textContent !== "0") display.textContent += 0;
    value = Number(display.textContent);
}

function displayOne() {
    if (value === 0) {
        display.textContent = "";
    }
    if (display.textContent === "0") {
        display.textContent = 1;
    } else {
        if (value.toString().length < 14) display.textContent += 1;
    }
    value = Number(display.textContent);
}

function displayTwo() {
    if (value === 0) {
        display.textContent = "";
    }
    if (display.textContent === "0") {
        display.textContent = 2;
    } else {
        if (value.toString().length < 14) display.textContent += 2;
    }    
    value = Number(display.textContent);
}

function displayThree() {
    if (value === 0) {
        display.textContent = "";
    }
    if (display.textContent === "0") {
        display.textContent = 3;
    } else {
        if (value.toString().length < 14) display.textContent += 3;
    }    
    value = Number(display.textContent);
}

function displayFour() {
    if (value === 0) {
        display.textContent = "";
    }
    if (display.textContent === "0") {
        display.textContent = 4;
    } else {
        if (value.toString().length < 14) display.textContent += 4;
    }    
    value = Number(display.textContent);
}

function displayFive() {
    if (value === 0) {
        display.textContent = "";
    }
    if (display.textContent === "0") {
        display.textContent = 5;
    } else {
        if (value.toString().length < 14) display.textContent += 5;
    }   
    value = Number(display.textContent);
}

function displaySix() {
    if (value === 0) {
        display.textContent = "";
    }
    if (display.textContent === "0") {
        display.textContent = 6;
    } else {
        if (value.toString().length < 14) display.textContent += 6;
    }    
    value = Number(display.textContent);
}

function displaySeven() {
    if (value === 0) {
        display.textContent = "";
    }
    if (display.textContent === "0") {
        display.textContent = 7;
    } else {
        if (value.toString().length < 14) display.textContent += 7;
    }    
    value = Number(display.textContent);
}

function displayEight() {
    if (value === 0) {
        display.textContent = "";
    }
    if (display.textContent === "0") {
        display.textContent = 8;
    } else {
        if (value.toString().length < 14) display.textContent += 8;
    }    
    value = Number(display.textContent);
}

function displayNine() {
    if (value === 0) {
        display.textContent = "";
    }
    if (display.textContent === "0") {
        display.textContent = 9;
    } else {
        if (value.toString().length < 14) display.textContent += 9;
    }    
    value = Number(display.textContent);
}

function displayFloat() {
    if (!display.textContent.includes(".") && display.textContent !== "") display.textContent += ".";
    value = Number(display.textContent);
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

function displayBackspace() {
    display.textContent = display.textContent.slice(0, -1);
    value = Number(display.textContent);
}

function displayClear() {
    display.textContent = "";
    value = 0;
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
float.addEventListener("click", displayFloat);
add.addEventListener("click", addOperator);
subtract.addEventListener("click", subtractOperator);
multiply.addEventListener("click", multiplyOperator);
divide.addEventListener("click", divideOperator);
equals.addEventListener("click", () => operate(firstNumber, secondNumber, operator));
clear.addEventListener("click", displayClear);
backspace.addEventListener("click", displayBackspace);