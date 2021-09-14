const output = document.querySelector(".output");
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");

operations.forEach(operation => {
    operation.addEventListener('click', () => {
        output.innerText = operation.innerText;
    })
})

numbers.forEach(number => {
    number.addEventListener('click', () => {
        output.innerText = number.innerText;
    })
})