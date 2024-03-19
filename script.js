let form = document.querySelector('form');
let select_item = document.querySelector('#select-item'); 
let n1 = document.querySelector('#n1');
let n2 = document.querySelector('#n2');
let h2 = document.querySelector('#h2');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formdata = new FormData(form);
  const budget = {};
  formdata.forEach((value, key) => {
    budget[key] = value;
  });
  const select_value = budget.selectitem;
  const value1 = n1.value;
  const value2 = n2.value;


//decimal start
if (select_value=='decimal') {
 const decNum1 = parseInt(value1);
 const decNum2 = parseInt(value2);
  
 // Add the decimal numbers
 const decimal = decNum1 + decNum2;

 h2.innerHTML=`sum=${decimal}`
}
//decimal end
  
  
  //binary start
if (select_value=='binary') {
 const decNum1 = parseInt(value1,2);
 const decNum2 = parseInt(value2,2);
  
 // Add the decimal numbers
 const sumDecimal = decNum1 + decNum2;
 // Convert the sum back to octal
 const sumOctal = sumDecimal.toString(2);
 h2.innerHTML=`sum=${sumOctal}`
}
//binary end
  

//doctal start
if (select_value=='octal') {
 const decNum1 = parseInt(value1,8);
 const decNum2 = parseInt(value2,8);
  
 // Add the decimal numbers
 const sumDecimal = decNum1 + decNum2;
 // Convert the sum back to octal
 const sumOctal = sumDecimal.toString(8);
 h2.innerHTML=`sum=${sumOctal}`
}
//octal end
 
 
//hexadecimal start
if (select_value=='hexadecimal') {
 const decNum1 = parseInt(value1,16);
 const decNum2 = parseInt(value2,16);
  
 // Add the decimal numbers
 const sumDecimal = decNum1 + decNum2;
 // Convert the sum back to octal
 const sumOctal = sumDecimal.toString(16);
 h2.innerHTML=`sum=${sumOctal}`
}
//hexadecimal end
 
 });
  
function isValidOctal(number) {
  return /^0[0-7]+$/.test(number);
 }
 
 
 console.log(window)