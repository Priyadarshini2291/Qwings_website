// Example fixed exchange rates
const exchangeRates = {
    "USD": {
        "EUR": 0.85,
        "GBP": 0.75
    },
    "EUR": {
        "USD": 1.18,
        "GBP": 0.88
    },
    "GBP": {
        "USD": 1.33,
        "EUR": 1.14
    }
};

function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const resultDiv = document.getElementById('result');

    if (fromCurrency === toCurrency) {
        resultDiv.textContent = `Converted Amount: ${amount} ${toCurrency}`;
        return;
    }

    const rate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = amount * rate;

    resultDiv.textContent = `Converted Amount: ${convertedAmount.toFixed(2)} ${toCurrency}`;
}
