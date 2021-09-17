const output = document.querySelector(".output");
const numbersButtons = document.querySelectorAll(".number");
const operationsButtons = document.querySelectorAll(".operation");
const clearButton = document.querySelector(".all-clear");
const deleteButton = document.querySelector(".delete");
const equalButton = document.querySelector(".equals");


let currentNumber = '';
let previousNumber = '';
let operation = "";

function deleteMaster() {
    currentNumber = currentNumber.slice(0, -1);
}

function clear() {
    currentNumber = '';
    previousNumber = '';
    operation = "";
}

function updateDisplay() {
    if (operation !== '') {
        output.innerText = `${previousNumber} ${operation} ${currentNumber}`;
    } else {
        output.innerText = currentNumber;
    }
}

function appendNumber(number) {
    if (number === '.' && currentNumber.includes('.')) return;
    if (number === '.' && currentNumber === '') {
        currentNumber = '0';
    }
    currentNumber += number;
}


function compute() {
    let previousRealNumber = parseFloat(previousNumber);
    let currentRealNumber = parseFloat(currentNumber);
    switch (operation) {
        case '/':
            currentNumber = previousRealNumber / currentRealNumber;
            break;
        case '+':
            currentNumber = previousRealNumber + currentRealNumber;
            break;
        case '*':
            currentNumber = previousRealNumber * currentRealNumber;
            break;
        case '-':
            currentNumber = previousRealNumber - currentRealNumber;
            break;
    }
    currentNumber = currentNumber.toString();
    previousNumber = '';
    operation = '';
}

function chooseOperation(operateur) {
    if (currentNumber === "") return;
    operation = operateur;
    previousNumber = currentNumber;
    currentNumber = "";
}
equalButton.addEventListener('click', () => {
    compute();
    updateDisplay();
})

clearButton.addEventListener('click', () => {
    clear();
    updateDisplay();
})
deleteButton.addEventListener('click', () => {
    deleteMaster();
    updateDisplay();
})


operationsButtons.forEach(operation => {
    operation.addEventListener('click', () => {
        chooseOperation(operation.innerText);
        updateDisplay();
    })
})



numbersButtons.forEach(number => {
    number.addEventListener('click', () => {
        appendNumber(number.innerText);
        updateDisplay();
    })
})


