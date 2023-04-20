{
    const calculateResult = (amountPLN, currency) => {

        const EUR = 4.65;
        const USD = 4.21;
        const GBP = 5.27;
        const CHF = 4.74;

        switch (currency) {
            case "EUR":
                return amountPLN / EUR
            case "USD":
                return amountPLN / USD
            case "GBP":
                return amountPLN / GBP
            case "CHF":
                return amountPLN / CHF
        }
    };
    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountPLN = document.querySelector(".js-form__PLN");
        const currencySelect = document.querySelector(".js-form_select");

        const amount = +amountPLN.value;
        const currency = currencySelect.value;

        const result = calculateResult(amount, currency);
        updateResultText(amount, result, currency);
    };

    const init = () => {
        const sectionForm = document.querySelector(".js-form");

        sectionForm.addEventListener("submit", onFormSubmit);
    };

    init();
}