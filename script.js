const root = document.getElementById("root");

import { constGatherer } from "./new-builder.js";

import { calculate, displayResults, clear } from "./calculator.js";

constGatherer();
const submit = document.getElementById("submit");
const amountInput = document.getElementById("amount");
const termInput = document.getElementById("term");
const rateInput = document.getElementById("rate");
submit.addEventListener('click', (event) => {
    event.preventDefault();
    const amount = parseFloat(amountInput.value.replace(/,/g, '')) 

    const result = calculate(amount, termInput.value, rateInput.value);

    displayResults(result.monthlyPayment, result.totalRepayment);
});

amountInput.addEventListener('input', (event) => {
    let value = event.target.value;

    value = value.replace(/[^\d.]/g, '');

    event.target.value = formatWithCommas(value);
});

function formatWithCommas(number) {
    const parts = number.split('.');
    
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return parts.join('.');
}

document.getElementById("clear-btn").addEventListener('click', clear)