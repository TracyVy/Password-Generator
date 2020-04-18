var lengthInput = '>=8, <=128';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var uppeCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var number = '0123456789';
var symbol = '!@#$%^&*()';

function yesFunction() {
  var checkbox = document.getElementById("yesNew");
  var text = document.getElementById("yesText");

  if (checkbox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
};

function validLength() {
  var x = document.getElementById('lengthInput');

  if (x >= 8 && x <= 128) {
    alert("Great!");
  } else {
    alert("Please enter a number between 8 & 128");
  }
};

