export function calculate(amount, term, rate) {
    
   const principal = parseFloat(amount);
   const annualInterestRate = parseFloat(rate) / 100;
   const monthlyInterestRate = annualInterestRate / 12;
   const numberOfPayments = term * 12;

   const monthlyPayment = (principal * monthlyInterestRate) / 
            (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

            const totalRepayment = monthlyPayment * numberOfPayments;

            return {
                monthlyPayment: monthlyPayment.toFixed(2),
                totalRepayment: totalRepayment.toFixed(2),   
                monthlyInterest: annualInterestRate.toFixed(2)
            };
};

const checkAmount = () => {
    const amountInput = document.getElementById("amount");
    if (amountInput.value.trim() === "") {
        document.getElementById("amount-span").style.display = "block";
        document.getElementById("quid").classList.add("quid-err");
        document.getElementById("quid").classList.remove("quid");
        document.getElementById("amount").classList.add("amount-err");
        document.getElementById("amount").classList.remove("amount");
        return false;
    } else {
        document.getElementById("amount-span").style.display = "none";
        document.getElementById("quid").classList.remove("quid-err");
        document.getElementById("quid").classList.add("quid");
        document.getElementById("amount").classList.remove("amount-err");
        document.getElementById("amount").classList.add("amount");
        return true;
    }
}

const checkTerm = () => {
    const termInput = document.getElementById("term");
    if (termInput.value.trim() === "") {
        document.getElementById("term-span").style.display = "block";
        document.getElementById("years").classList.add("years-err");
        document.getElementById("years").classList.remove("years");
        document.getElementById("term").classList.add("term-err");
        document.getElementById("term").classList.remove("term");
        return false;
    } else {
        document.getElementById("term-span").style.display = "none";
        document.getElementById("years").classList.remove("years-err");
        document.getElementById("years").classList.add("years");
        document.getElementById("term").classList.remove("term-err");
        document.getElementById("term").classList.add("term");
        return true;
    }
}

const checkRate = () => {
    const rateInput = document.getElementById("rate");
    if (rateInput.value.trim() === "") {
        document.getElementById("perc-span").style.display = "block";
        document.getElementById("perc").classList.add("perc-err");
        document.getElementById("perc").classList.remove("perc");
        document.getElementById("rate").classList.add("rate-err");
        document.getElementById("rate").classList.remove("rate");
        return false;
    } else {
        document.getElementById("perc-span").style.display = "none";
        document.getElementById("perc").classList.remove("perc-err");
        document.getElementById("perc").classList.add("perc");
        document.getElementById("rate").classList.remove("rate-err");
        document.getElementById("rate").classList.add("rate");
        return true;
    }
}

const checkRadio = () => {
    const radios = document.getElementsByClassName("radio-input");
    let isSelected = false
    for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
        isSelected = true;
        return true
    }
}
}

    const validateRadio = () => {
       const isSelected = checkRadio();
        if (isSelected) {
            document.getElementById("radio-span").style.display = "none";
            return true
        } else {
            document.getElementById("radio-span").style.display = "block";
            return false
        }
    }

    function formatWithCommas(number) {
        const parts = number.split('.');
        
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
        return parts.join('.');
    }
   
export function displayResults(monthly, total) {

    const illustration = document.getElementById("illustration");
    const emptyTitle = document.getElementById("empty-title");
    const emptyText = document.getElementById("empty-text");
    
    const fullTitle = document.getElementById("full-title");
    const fullText = document.getElementById("full-text");
    const resultsDiv = document.getElementById("results-div");
    const rightDiv = document.getElementById("right-div");
    
    const monthlyResult = document.getElementById("monthly-result");
    const totalResult = document.getElementById("total-result");

    const interest = document.getElementById("radio-two");
    const title = document.getElementById("monthly-title");
        if (interest.checked) {
            
            title.textContent = "Monthly interest rate"
        } else {
            title.textContent = "Your monthly repayments"
        }

    illustration.style.display = "none";
    emptyTitle.style.display = "none";
    emptyText.style.display = "none";

    fullTitle.style.display = "block";
    fullText.style.display = "block";
    resultsDiv.style.display = "block";

    rightDiv.classList.remove("right-div");
    rightDiv.classList.add("right-div-full");    

    monthlyResult.textContent = `£${formatWithCommas(monthly)}`;
    totalResult.textContent = `£${formatWithCommas(total)}`;

}

export function clear() {
const illustration = document.getElementById("illustration");
const emptyTitle = document.getElementById("empty-title");
const emptyText = document.getElementById("empty-text");

const fullTitle = document.getElementById("full-title");
const fullText = document.getElementById("full-text");
const resultsDiv = document.getElementById("results-div");
const rightDiv = document.getElementById("right-div");

const monthlyResult = document.getElementById("monthly-result");
const totalResult = document.getElementById("total-result");

document.getElementById("amount-span").style.display = "none";
document.getElementById("quid").classList.remove("quid-err");
document.getElementById("quid").classList.add("quid");
document.getElementById("amount").classList.remove("amount-err");
document.getElementById("amount").classList.add("amount");

document.getElementById("term-span").style.display = "none";
document.getElementById("years").classList.remove("years-err");
document.getElementById("years").classList.add("years");
document.getElementById("term").classList.remove("term-err");
document.getElementById("term").classList.add("term");

document.getElementById("perc-span").style.display = "none";
document.getElementById("perc").classList.remove("perc-err");
document.getElementById("perc").classList.add("perc");
document.getElementById("rate").classList.remove("rate-err");
document.getElementById("rate").classList.add("rate");

document.getElementById("radio-span").style.display = "none";

 document.getElementById("form").reset();
 illustration.style.display = "block";
 emptyTitle.style.display = "block";
 emptyText.style.display = "block";

 fullTitle.style.display = "none";
 fullText.style.display = "none";
 resultsDiv.style.display = "none";

 rightDiv.classList.add("right-div");
 rightDiv.classList.remove("right-div-full");   
}

export function verifyInputs () {

    const isAmountValid = checkAmount();
    const isTermValid = checkTerm();
    const isRateValid = checkRate();
    const isRadioValid = validateRadio();

    if (isAmountValid && isTermValid && isRateValid && isRadioValid) {
        const amountInput = document.getElementById("amount");
        const termInput = document.getElementById("term");
        const rateInput = document.getElementById("rate");
        const amount = parseFloat(amountInput.value.replace(/,/g, '')) 
        const term = parseFloat(termInput.value);
        const rate = parseFloat(rateInput.value);
        const result = calculate(amount, term, rate);
        const interest = document.getElementById("radio-two");
        if (interest.checked) {
            displayResults(result.monthlyInterest, result.totalRepayment)
        } else {
            displayResults(result.monthlyPayment, result.totalRepayment);
        }
    }
}
