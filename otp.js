let value = document.querySelector("#otp");
let ran = Math.floor(1000 + Math.random() * 9000);
value.innerHTML = "Here is your OTP:"+ ran;
let input = document.querySelector("#inp");

let result=document.querySelector("#res");

let output;

function display() { 
  if (input.value == ran) 
  output = "OTP Registered!";
  else
  output= "OTP Rejected"

  result.innerHTML=output;
}
