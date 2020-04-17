var charNum = '>=8, <=128';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var uppeCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var number = '0123456789';
var symbol = '!@#$%^&*()';

btnGenerate.addEventListener("click", (e) => {
  //e.();
})

lowerBtn.addEventListener("click", (e) => {
  console.log("Lower Case checked");
})

upperBtn.addEventListener("click", (e) => {
  console.log("Upper Case checked");
})

numBtn.addEventListener("click", (e) => {
  console.log("Number button checked");
})

symBtn.addEventListener("click", (e) => {
  console.log("Special CHaracters checked");
})


var charNum = document.getElementById('charNum');
var lower = document.getElementById('lowerBtn');
var upper = document.getElementById('upperBtn');
var symbol = document.getElementById('symBtn');
var generate = document.getElementById('generate');
var password = document.getElementById('password');


