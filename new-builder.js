const root = document.querySelector("#root");

const bluePrint = {
    element: "div",
    id: "",
    classList: "",
    src: "",
    textContent: "",
    htmlFor: "",
    name: "",
    type: "",
    target: "",
};

function elementBuilder(obj) {
    const element = document.createElement(obj.element);

    const entries = Object.entries(obj);

    for (let i = 0; i < entries.length; i++){
        const currentKey = entries[i][0];
        const currentValue = entries[i][1];

        if (currentKey !== "target" && currentKey !== "element") {
            element[currentKey] = currentValue;
        }
    }

    obj.target.appendChild(element);

    return element;
};

export function constGatherer() {

    const container = elementBuilder({...bluePrint, classList: "container", target: root});

    const leftDiv = elementBuilder({...bluePrint, classList: "left-div", target: container});

    const rightDiv = elementBuilder({...bluePrint, classList: "right-div", target: container});

    const illustration = elementBuilder({...bluePrint, element: "img", classList: "illustration", src: "./assets/images/illustration-empty.svg", target: rightDiv});
    
    const emptyResults = elementBuilder({...bluePrint, element: "h2", classList: "empty-results", textContent: "Results shown here", target: rightDiv});

    const emptyText = elementBuilder({...bluePrint, element: "p", classList: "empty-text", textContent: `Complete the form and click “calculate repayments” to see what your monthly repayments would be.`, target: rightDiv});

    const fullTitle = elementBuilder({...bluePrint, element: "h2", classList: "full-title", textContent: "Your Results", target: rightDiv});

    const fullText = elementBuilder({...bluePrint, element: "p", classList: "full-text", textContent: `Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.`, target: rightDiv});

    const resultsDiv = elementBuilder({...bluePrint, classList: "results-div", target: rightDiv});

    const monthlyTitle = elementBuilder({...bluePrint, element: "p", classList: "monthly-title", textContent: "Your monthly repayments", target: resultsDiv});

    const monthlyResult = elementBuilder({...bluePrint, element: "p", classList: "monthly-result", textContent: "$1,797.74", target: resultsDiv});

    const hr = elementBuilder({...bluePrint, element: "hr", id: "hr", target: resultsDiv});

    const totalTitle = elementBuilder({...bluePrint, element: "p", classList: "total-title", textContent: "Total you'll repay over the term", target: resultsDiv});

    const totalResult = elementBuilder({...bluePrint, element: "p", classList: "total-result", textContent: "$539,322.94", target: resultsDiv});

    const titleDiv = elementBuilder({...bluePrint, classList: "title-div", target: leftDiv});

    const title = elementBuilder({...bluePrint, element: "h1", classList: "title", textContent: "Mortgage Calculator", target: titleDiv});

    const clearBtn = elementBuilder({...bluePrint, element: "p", classList: "clear-btn", textContent: "Clear All", target: titleDiv});

    const form = elementBuilder({...bluePrint, element: "form", classList: "form", action: ``, target: leftDiv});

    const amountLabel = elementBuilder({...bluePrint, element: "label", classList: "label", textContent: "Mortgage Amount", htmlFor: "amount", target: form});

    const amountDiv = elementBuilder({...bluePrint, classList: "amount-div", target: form});

    const quid = elementBuilder({...bluePrint, id: "quid", textContent: "£", target: amountDiv});

    const amountInput = elementBuilder({...bluePrint, id: "amount", element: "input", name: "amount", type: "number", target: amountDiv});

    const outerDiv = elementBuilder({...bluePrint, id: "outer-div", target: form});

    const inlineDiv = elementBuilder({...bluePrint, id: "inline-div", target: outerDiv});

    const inlineDivv = elementBuilder({...bluePrint, id: "inline-divv", target: outerDiv});

    const termLabel = elementBuilder({...bluePrint, element: "label", classList: "label", textContent: "Mortgage Term", htmlFor: "term", target: inlineDiv});

    const termDiv = elementBuilder({...bluePrint, classList: "term-div", target: inlineDiv});

    const termInput = elementBuilder({...bluePrint, element: "input", id: "term", name: "term", type: "number", target: termDiv});

    const years = elementBuilder({...bluePrint, id: "years", textContent: "years", target: termDiv});

    const rateLabel = elementBuilder({...bluePrint, element: "label", classList: "label", textContent: "Interest Rate", htmlFor: "rate", target: inlineDivv});

    const rateDiv = elementBuilder({...bluePrint, classList: "rate-div", target: inlineDivv});

    const rateInput = elementBuilder({...bluePrint, element: "input", id: "rate", name: "rate", type: "number", target: rateDiv});

    const perc = elementBuilder({...bluePrint, id: "perc", textContent: "%", target: rateDiv});

    const typeLabel = elementBuilder({...bluePrint, element: "label", classList: "label", textContent: "Mortgage Type", htmlFor: "type", target: form});

    const radioDivOne = elementBuilder({...bluePrint, classList: "radio-div", target: form});

    const radioInputOne = elementBuilder({...bluePrint, element: "input", classList: "radio-input", type: "radio", id: "radio-one", name: "radio", target: radioDivOne});

    const radioLabelOne = elementBuilder({...bluePrint, element: "label", classList: "radio-label", textContent: "Repayment", htmlFor: "radio", target: radioDivOne});

    const radioDivTwo = elementBuilder({...bluePrint, classList: "radio-div", target: form});

    const radioInputTwo = elementBuilder({...bluePrint, element: "input", classList: "radio-input", type: "radio", id: "radio-two", name: "radio", target: radioDivTwo});

    const radioLabelTwo = elementBuilder({...bluePrint, element: "label", classList: "radio-label", textContent: "Interest Only", htmlFor: "radio", target: radioDivTwo});

    radioDivOne.addEventListener("click", () => {
        radioInputOne.checked = true;
    });
    
    radioDivTwo.addEventListener("click", () => {
        radioInputTwo.checked = true;
    });

    const submit = elementBuilder({...bluePrint, element: "button", type: "submit", id: "submit", target: form});

    const submitIcon = elementBuilder({...bluePrint, element: "img", id: "submit-icon", src: "./assets/images/icon-calculator.svg", target: submit});

    const submitTxt = elementBuilder({...bluePrint, element: "p", id: "submit-text", textContent: "Calculate Repayments", target: submit});
}
 

