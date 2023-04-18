let sectionForm = document.querySelector(".js-form");
let amountPLN = document.querySelector(".js-form__PLN");
let currencySelect = document.querySelector(".js-form_select");
let resultElement = document.querySelector(".js-result")

sectionForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let PLN = amountPLN.value;
    let EUR = 4.65;
    let USD = 4.21;
    let GBP = 5.27;
    let CHF = 4.74;

    let amount = +amountPLN.value;
    let currency = currencySelect.value;

    switch (currency) {
        case "EUR":
            result = PLN / EUR
            break;
        case "USD":
            result = PLN / USD
            break;
        case "GBP":
            result = PLN / GBP
            break;
        case "CHF":
            result = PLN / CHF
            break;
    }

    resultElement.innerText = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
})
