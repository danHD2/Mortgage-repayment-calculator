const root = document.getElementById("root");

import { constGatherer } from "./new-builder.js";

constGatherer();

import { clear, verifyInputs } from "./calculator.js";


const submit = document.getElementById("submit");
const amountInput = document.getElementById("amount");
const termInput = document.getElementById("term");
const rateInput = document.getElementById("rate");


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

submit.addEventListener('click', (event) => {
    event.preventDefault();
    verifyInputs();
});