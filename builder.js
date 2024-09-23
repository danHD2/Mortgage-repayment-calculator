export const builder = () => {

    const container = document.createElement("div");
    container.classList = "container";
    root.appendChild(container);

    const leftDiv = document.createElement("div");
    leftDiv.classList = "left-div";
    container.appendChild(leftDiv);

    const rightDiv = document.createElement("div");
    rightDiv.classList = "right-div";
    container.appendChild(rightDiv);

    const illustration = document.createElement("img");
    illustration.classList = "illustration";
    illustration.src = "./assets/images/illustration-empty.svg";
    rightDiv.appendChild(illustration);

    const emptyResults = document.createElement("h2");
    emptyResults.classList = "empty-results";
    emptyResults.textContent = "Results shown here";
    rightDiv.appendChild(emptyResults);

    const emptyText = document.createElement('p');
    emptyText.classList = "empty-text";
    emptyText.textContent = `Complete the form and click “calculate repayments” to see what your monthly repayments would be.`
    rightDiv.appendChild(emptyText);

    const titleDiv = document.createElement("div");
    titleDiv.classList = "title-div";
    leftDiv.appendChild(titleDiv);

    const title = document.createElement("h1");
    title.classList = "title";
    title.textContent = "Mortgage Calculator";
    titleDiv.appendChild(title);

    const clearBtn = document.createElement("p");
    clearBtn.classList = "clear-btn";
    clearBtn.textContent = "Clear All";
    titleDiv.appendChild(clearBtn);

    const form = document.createElement("form");
    form.classList = "form";
    form.action = "";
    leftDiv.appendChild(form);

    const amountLabel = document.createElement("label");
    amountLabel.classList = "label";
    amountLabel.textContent = "Mortgage Amount";
    amountLabel.htmlFor = "amount";
    form.appendChild(amountLabel);

    const amountDiv = document.createElement("div");
    amountDiv.classList = "amount-div";
    form.appendChild(amountDiv);

    const quid = document.createElement("div");
    quid.id = "quid";
    quid.textContent= "£";
    amountDiv.appendChild(quid);
    
    const amountInput = document.createElement("input");
    amountInput.id = "amount";
    amountInput.name = "amount";
    amountInput.type = "number";
    amountDiv.appendChild(amountInput);

    const outerDiv = document.createElement("div");
    outerDiv.id = "outer-div";
    form.appendChild(outerDiv);

    const inlineDiv = document.createElement("div");
    inlineDiv.id = "inline-div";
    outerDiv.appendChild(inlineDiv);

    const inlineDivv = document.createElement("div");
    inlineDivv.id = "inline-divv";
    outerDiv.appendChild(inlineDivv);

    const termLabel = document.createElement("label");
    termLabel.classList = "label";
    termLabel.textContent = "Mortgage Term";
    termLabel.htmlFor = "term";
    inlineDiv.appendChild(termLabel);

    const termDiv = document.createElement("div");
    termDiv.classList = "term-div";
    inlineDiv.appendChild(termDiv);

    const termInput = document.createElement("input");
    termInput.id = "term";
    termInput.name = "term";
    termInput.type = "number";
    termDiv.appendChild(termInput);

    const years = document.createElement("div");
    years.id = "years";
    years.textContent= "years";
    termDiv.appendChild(years);

    const rateLabel = document.createElement("label");
    rateLabel.classList = "label";
    rateLabel.textContent = "Interest Rate";
    rateLabel.htmlFor = "rate";
    inlineDivv.appendChild(rateLabel);

    const rateDiv = document.createElement("div");
    rateDiv.classList = "rate-div";
    inlineDivv.appendChild(rateDiv);

    const rateInput = document.createElement("input");
    rateInput.id = "rate";
    rateInput.name = "rate";
    rateInput.type = "number";
    rateDiv.appendChild(rateInput);

    const perc = document.createElement("div");
    perc.id = "perc";
    perc.textContent = "%";
    rateDiv.appendChild(perc);

    const typeLabel = document.createElement("label");
    typeLabel.classList = "label";
    typeLabel.textContent = "Mortgage Type";
    typeLabel.htmlFor = "type";
    form.appendChild(typeLabel);

    const radioDivOne = document.createElement("div");
    radioDivOne.classList = "radio-div";
    form.appendChild(radioDivOne);

    const radioInputOne = document.createElement("input");
    radioInputOne.classList = "radio-input";
    radioInputOne.type = "radio";
    radioInputOne.id = "radio-one";
    radioInputOne.name = "radio";
    radioDivOne.appendChild(radioInputOne);

    const radioLabelOne = document.createElement("label");
    radioLabelOne.classList = "radio-label";
    radioLabelOne.textContent = "Repayment";
    radioLabelOne.htmlFor = "radio";
    radioDivOne.appendChild(radioLabelOne);

    const radioDivTwo = document.createElement("div");
    radioDivTwo.classList = "radio-div";
    form.appendChild(radioDivTwo);

    const radioInputTwo = document.createElement("input");
    radioInputTwo.classList = "radio-input";
    radioInputTwo.type = "radio";
    radioInputTwo.id = "radio-two";
    radioInputTwo.name = "radio";
    radioDivTwo.appendChild(radioInputTwo);

    const radioLabelTwo = document.createElement("label");
    radioLabelTwo.classList = "radio-label";
    radioLabelTwo.textContent = "Interest Only";
    radioLabelTwo.htmlFor = "radio";
    radioDivTwo.appendChild(radioLabelTwo);

    const submit = document.createElement("button");
    submit.type = "submit";
    submit.id = "submit";
    form.appendChild(submit);

    const submitIcon = document.createElement("img");
    submitIcon.id = "submit-icon";
    submitIcon.src = "./assets/images/icon-calculator.svg"
    submit.appendChild(submitIcon);

    const submitTxt = document.createElement("p");
    submitTxt.id = "submit-text";
    submitTxt.textContent = "Calculate Repayments";
    submit.appendChild(submitTxt);

}