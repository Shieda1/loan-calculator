const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const radioLoan = document.getElementById('loan');
const radioPayment = document.getElementById('payment');
const radioInterest = document.getElementById('interest');
const radioMonths = document.getElementById('months');

let loan;
let payment = v1;
let interest = v2;
let months = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

let compoundFrequency = 1;

radioLoan.addEventListener('click', function() {
  variable1.textContent = 'Enter the monthly payment';
  variable2.textContent = 'Enter the interest rate';
  variable3.textContent = 'Enter the number of months';
  payment = v1;
  interest = v2;
  months = v3; 
});
radioPayment.addEventListener('click', function() {
  variable1.textContent = 'Enter the loan amount';
  variable2.textContent = 'Enter the interest rate';
  variable3.textContent = 'Enter the number of months';
  loan = v1;
  interest = v2;
  months = v3; 
});
radioInterest.addEventListener('click', function() {
  variable1.textContent = 'Enter the loan amount';
  variable2.textContent = 'Enter the monthly payment';
  variable3.textContent = 'Enter the number of months';
  loan = v1;
  payment = v2;
  months = v3; 
});
radioMonths.addEventListener('click', function() {
  variable1.textContent = 'Enter the loan amount';
  variable2.textContent = 'Enter the monthly payment';
  variable3.textContent = 'Enter the interest rate';
  loan = v1;
  payment = v2;
  interest = v3; 
});

btn.addEventListener('click', function() {
  if(radioLoan.checked)
    result.textContent = `Loan Amount = $${computeLoan().toFixed(2)}`;
  else if(radioPayment.checked)
    result.textContent = `Monthly Payment = $${computePayment().toFixed(2)}`;
  else if(radioInterest.checked)
    result.textContent = `Interest Rate = ${computeInterest().toFixed(2)}%`;
  else if(radioMonths.checked)
    result.textContent = `Number of months = ${computeMonths()} months`;
})

function computeLoan() {
  let monthlyInterest = (interest.value / (100 * 12));
  return (payment.value / monthlyInterest) * (1 - (1 / Math.pow(1 + monthlyInterest, months.value)));
}

function computePayment() {
  let monthlyInterest = (interest.value / (100 * 12));
  return (loan.value * monthlyInterest * Math.pow(1 + monthlyInterest, months.value)) / (Math.pow(1 + monthlyInterest, months.value) - 1);
}

function computeMonths() {
  let monthlyInterest = (interest.value / (100 * 12));
  return Math.round((Math.log((payment.value / monthlyInterest) / ((payment.value /monthlyInterest) - loan.value))) / (Math.log(1 + monthlyInterest)));
}

interest = function(loan, pmt, n){
  
}
