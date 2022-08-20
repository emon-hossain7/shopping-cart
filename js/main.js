













// case calculation
function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const previousCaseNumber = parseInt(caseNumberField.value);
    let newCaseNumber;
    if(isIncrease){
        newCaseNumber = previousCaseNumber + 1
    }else{
        newCaseNumber = previousCaseNumber - 1
    }
    caseNumberField.value = newCaseNumber
    return newCaseNumber;

}

function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement  = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice
}
const btnCasePlus = document.getElementById('btn-case-plus');
btnCasePlus.addEventListener('click', () => {
   const newCaseNumber = updateCaseNumber(true)
   updateCaseTotalPrice(newCaseNumber)
   calculateSubTotal();
    
})

const btnCaseMinus = document.getElementById('btn-case-minus');
btnCaseMinus.addEventListener('click', () => {
    const newCaseNumber = updateCaseNumber(false)
    updateCaseTotalPrice(newCaseNumber)
    calculateSubTotal();
})

// phone calculation
function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const previousPhoneNumber = parseInt(phoneNumberField.value);
    
    let newPhoneNumber;
    if(isIncrease){
        newPhoneNumber = previousPhoneNumber + 1;
    }else{
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;

}

function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
}


function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotal = parseInt(phoneTotalElement.innerText);
    return currentPhoneTotal;
}

function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value
}

function calculateSubTotal(){
       // calculate total
   const currentPhoneTotal = getTextElementValueById('phone-total');
   const currentCaseTotal = getTextElementValueById('case-total');

   const currentSubTotal = currentPhoneTotal + currentCaseTotal;
   setTextElementValueById('sub-total', currentSubTotal)

   //calculate tax
   const taxAmount = parseFloat((currentSubTotal * 0.1).toFixed(2));
   setTextElementValueById('tax-amount', taxAmount)

   //final amount
   const finalAmount = currentSubTotal + taxAmount;
   setTextElementValueById('final-total', finalAmount)
   
}

const btnPhonePlus = document.getElementById('btn-phone-plus');
btnPhonePlus.addEventListener('click', () => {
   const newPhoneNumber =  updatePhoneNumber(true);
   updatePhoneTotalPrice(newPhoneNumber)

   calculateSubTotal();

  
})

const btnPhoneMinus = document.getElementById('btn-phone-minus');
btnPhoneMinus.addEventListener('click', () => {
    const newPhoneNumber =  updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber)

    calculateSubTotal();
})











