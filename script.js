const output = document.querySelector(".output");
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const clear = document.querySelector(".all-clear");

let numero = [];
let operatio = "";
let total = 0;



clear.addEventListener('click', () => {
    output.innerText = null;
})

operations.forEach(operation => {
    operation.addEventListener('click', () => {
        output.innerText = operation.innerText;
        if (output.innerText === '*') {
            operatio = '*';
        } else if (output.innerText === '+') {
            operatio = '+';
        }
        else if (output.innerText === '÷') {
            operatio = '/';
        }
        else operatio = '-';
    })
})

numbers.forEach(number => {
    number.addEventListener('click', () => {
        output.innerText = number.innerText;
    })
})

function adder(a, b) {
    return a + b;
}

function multiplier(a, b) {
    return a * b;
}

function divider(a, b) {
    return a / b;
}

function substracter(a, b) {
    return a - b;
}

function operate(operator, num1, num2) {
    return operator(num1, num2);
}


