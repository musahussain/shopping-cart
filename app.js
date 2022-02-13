// updating case and phone input 
function updateCaseInput(product, rate, isIncreasing) {
    const caseInput = document.getElementById(product + '-input');
    let caseNumber = parseInt(caseInput.value);
    if(isIncreasing) {
        caseNumber += 1;
    } else if(caseNumber > 0) {
        caseNumber -= 1;
    }
    caseInput.value = caseNumber;


    let casePrice = document.getElementById(product + '-total');
    const caseTotal = rate * parseInt(caseInput.value);
    casePrice.innerText = caseTotal;
}

// case increasing
const casePlus = document.getElementById('case-plus');
casePlus.addEventListener('click', function() {
    updateCaseInput('case', 59, true);
});
// case decreasing
const caseMinus = document.getElementById('case-minus');
caseMinus.addEventListener('click', function() {
    updateCaseInput('case', 59, false);
});

// phone increasing 
const phonePlus = document.getElementById('phone-plus');
phonePlus.addEventListener('click', function() {
    updateCaseInput('phone', 1219, true);
});

// phone decreasing 
const phoneMinus = document.getElementById('phone-minus');

phoneMinus.addEventListener('click', function() {
    updateCaseInput('phone', 1219, false);
});

// checkout 
const checkout = document.getElementById('checkout');
checkout.addEventListener('click', function() {
    subTotal();
});

function subTotal(tax = 40) {
    // get all text fields
    const phonePriceTotal = document.getElementById('phone-total');
    const casePriceTotal = document.getElementById('case-total');
    const setSubTotal = document.getElementById('set-subtotal');
    const setTax = document.getElementById('set-tax');
    const mainTotal = document.getElementById('set-maintotal');
    
    // set subtotal
    let finalSubTotal = parseFloat(casePriceTotal.innerText) + parseFloat(phonePriceTotal.innerText);
    setSubTotal.innerText = finalSubTotal;

    // set tax
    setTax.innerText = tax;
    // final total 
    mainTotal.innerText = finalSubTotal + tax;

}