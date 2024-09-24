export function calculate(amount, term, rate) {
    
   const principal = parseFloat(amount);
   const annualInterestRate = parseFloat(rate) / 100;
   const monthlyInterestRate = annualInterestRate / 12;
   const nuumberOfPayments = term * 12;

   const monthlyPayment = (principal * monthlyInterestRate) / 
            (1 - Math.pow(1 + monthlyInterestRate, -nuumberOfPayments));

            const totalRepayment = monthlyPayment * nuumberOfPayments;

            return {
                monthlyPayment: monthlyPayment.toFixed(2),
                totalRepayment: totalRepayment.toFixed(2)                
            };

};



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

    illustration.style.display = "none";
    emptyTitle.style.display = "none";
    emptyText.style.display = "none";

    fullTitle.style.display = "block";
    fullText.style.display = "block";
    resultsDiv.style.display = "block";

    rightDiv.classList.remove("right-div");
    rightDiv.classList.add("right-div-full");    

    monthlyResult.textContent = `${formatWithCommas(monthly)}`;
    totalResult.textContent = `${formatWithCommas(total)}`;

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