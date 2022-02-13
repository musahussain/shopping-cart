// subtotal 
// let caseTotalPrice = 0;
// let phoneTotalPrice = 0;

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

// updating case input 
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