document.querySelector('title').innerHTML = 'Tip Calculator';
//Get Input Values
let bill = document.getElementById('input-1').value = '';
let option = document.getElementById('select').value = '';
let people = document.getElementById('input-2').value = '';





// Calculation
function calculateBill() {
    const total = (bill.value * option.value) / people.value;
    console.log(total);
}

// Events
const total = (bill.value * option.value) / people.value;

 const btn = document.getElementById('btn-calc');
 btn.addEventListener('click',method1);
btn.addEventListener('click',method2);
function method2(){
if(bill || people || option === '3' ){
    alert("Gotten");
}
return('Method 2')
}
function method1(){
    if(bill || people || option === '') {
       
        alert ('You need to fill in all the fields!');
  
} 
  return("Method 1");
   
 }


