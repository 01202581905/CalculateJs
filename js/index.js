"use strict";
const output = document.getElementById('output');
const numbers = document.querySelectorAll('.btn_number button');
const operators = document.querySelectorAll('.btn_controll button');
const result = document.getElementById('btn_result');
const clear = document.getElementById('clear');
const dot = document.getElementById('dot');
let resultDisplay = false;

dot.addEventListener("click", function () {
    const outputString = output.innerHTML;
    const lastString = outputString[outputString.length - 1];
    if (lastString === '.') {
        output.innerHTML = outputString.slice(0, outputString.length - 1);
    }
});

numbers.forEach(number => {
    number.addEventListener('click', function () {

        const currentValue = number.innerHTML;
        const currentString = output.innerHTML;
        const lastChar = currentString[currentString.length - 1];

        if (!resultDisplay) {
            output.innerHTML += currentValue;
        } else if (resultDisplay && lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
            resultDisplay = false;
            output.innerHTML += currentValue;
        } else {
            resultDisplay = false;
            output.innerHTML = "";
            output.innerHTML += currentValue;
        }
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', function () {

        const currentValue = operator.innerHTML;
        const currentString = output.innerHTML;
        const lastChar = currentString[currentString.length - 1];

        if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
            const newString = currentString.substring(0, currentString.length - 1) + currentValue;
            output.innerHTML = newString;
        } else if (currentString.length === 0) {

        } else {
            output.innerHTML += currentValue;
        }
    })
});

result.addEventListener("click", function () {

    const outputString = output.innerHTML;
    let subNumber = outputString.split(/\+|\-|\×|\÷/g);
    let subOperator = outputString.replace(/[0-9]|\./g, "").split("");
    let divide = subOperator.indexOf("÷");

    console.log(divide, subNumber);
    while (divide != -1) {
        console.log('run when operators has /');
    }
});

clear.addEventListener("click", function () {
    output.innerHTML = "";
});