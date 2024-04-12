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
const buttons = document.querySelectorAll("button");

let value = 0;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (Number(button.textContent) < 10) {
            if (value === 0) {
                display.textContent = "";
            }
            if (display.textContent === "0") {
                display.textContent = Number(button.textContent);
            } else {
                if (value.toString().length < 14) display.textContent += Number(button.textContent);
            }    
            value = Number(display.textContent);
        }

        if (button.textContent === ".") {
            if (!display.textContent.includes(".") && display.textContent !== "") display.textContent += button.textContent;
            value = Number(display.textContent);
        }

        if (button.textContent === "+" || button.textContent === "-" || button.textContent === "×" || button.textContent === "÷") {
            if (firstNumber) {
                secondNumber = value;
            } else {
                firstNumber = value;
            }
            if (secondNumber && operator) operate(firstNumber, secondNumber, operator);
            switch (button.id) {
                case "add": 
                    operator = addNumbers;
                    break;
                case "subtract":
                    operator = subtractNumbers;
                    break;
                case "multiply":
                    operator = multiplyNumbers;
                    break;
                case "divide":
                    operator = divideNumbers;
                    break;
            }
            value = 0;
        }

        if (button.id === "backspace") {
            display.textContent = display.textContent.slice(0, -1);
            value = Number(display.textContent);
        }

        if (button.id === "clear") {
            display.textContent = "";
            value = 0;
            firstNumber = value;
            secondNumber = value;
            operator = null;
        }
    })

    document.addEventListener("keydown", event => {
        if (event.key === button.textContent.toLowerCase() || event.key.toLowerCase() === button.id) {
            button.click();
            button.classList.add("active");
        }
    });
    document.addEventListener("keyup", event => {
        if (event.key === button.textContent.toLowerCase() || event.key.toLowerCase() === button.id) {
            button.classList.remove("active");
        }
    })
});

equals.addEventListener("click", () => operate(firstNumber, secondNumber, operator));

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {equals.click(); equals.classList.add("active");}
    if (event.key === "Delete") {clear.click(); clear.classList.add("active");}
    if (event.key === "*") {multiply.click(); multiply.classList.add("active");}
    if (event.key === "/") {divide.click(); divide.classList.add("active");}
    
});
document.addEventListener("keyup", event => {
    if (event.key === "Enter") equals.classList.remove("active");
    if (event.key === "Delete") clear.classList.remove("active");
    if (event.key === "*") multiply.classList.remove("active");
    if (event.key === "/") divide.classList.remove("active");
});