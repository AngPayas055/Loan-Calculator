let amount = document.querySelector('#amount');
let interest = document.querySelector('#interest');
let days = document.querySelector('#days');
console.log(amount);


// var pricipalInput = document.getElementById('principal');

document.querySelector('form.form-loan').addEventListener('submit', function (e) {

    //prevent the normal submission of the form
    e.preventDefault();

    console.log(amount.value);    
    console.log(interest.value); 
    console.log(days.value); 
    // alert(amount.value)

    const a = Math.floor(amount.value);
    const i = Math.floor(interest.value);
    const d = Math.floor(days.value);

    let calculateInterest =  (i * 0.01) * a;
    let totalPayment = calculateInterest + a;
    let paymentPerDay = totalPayment/d;
    
    console.log("Total interest is " + calculateInterest);
    
    console.log("Total Payment is " + totalPayment);
    console.log("Payment per day " + paymentPerDay);

    const dailyPayment = document.querySelector('#payment-per-day');
	const totalInterest = document.querySelector('#interest-rate');
	const total = document.querySelector('#total');

    document.querySelector('#results').style.display = "block";
    

    totalInterest.innerHTML = 'P ' + calculateInterest.toFixed(2);;
    dailyPayment.innerHTML = 'P ' + paymentPerDay.toFixed(2);;
    total.innerHTML = 'P ' + totalPayment.toFixed(2);;

}); 