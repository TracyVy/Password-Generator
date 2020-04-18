// var lengthInput = "";
// var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
// var uppeCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// var number = '0123456789';
// var symbol = '!@#$%^&*()';

// function askQuestions() {
//   var text;
//   if (confirm("Click one)) {
//     text = "Great, let's begin!";
// } else {
//   text = "Okay, I will see you next time you need one.";
// }
// };

function yesFunction() {
  var checkbox = document.getElementById("yesNew");
  var text = document.getElementById("yesText");

  if (checkbox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}