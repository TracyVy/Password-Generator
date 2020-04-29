var x; // passwordLength
var newPasswordVal = "";
var textInputLength = document.getElementById("lengthInput");

textInputLength.addEventListener("keyup", validLength);

// Do you want a new password?
function yesFunction() {
  var checkbox = document.getElementById("yesNew");
  var text = document.getElementById("passwordForm");

  if (checkbox.checked == true) {
    //text.style.display = "block";
    text.style.visibility = "visible";
  } else {
    //text.style.display = "none";
    text.style.visibility = "hidden";
  }
}

// Validate password length
function validLength(e) {
  e.preventDefault();
  if (e.keyCode === 13) {
    x = document.getElementById("lengthInput").value;

    if (x < 8 || x > 128) {
      alert("Please enter a number between 8 & 128");
    }
  }
}

// Random functions
function randomLower() {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  return lower[Math.floor(Math.random() * lower.length)];
}

function randomUpper() {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return upper[Math.floor(Math.random() * upper.length)];
}

function randomNum() {
  const num = "0123456789";
  return num[Math.floor(Math.random() * num.length)];
}

function randomSym() {
  const sym = "~!@#$%^&*()-+";
  return sym[Math.floor(Math.random() * sym.length)];
}

// Generate functions
var btnGenerate = document.getElementById("btnGenerate");
btnGenerate.addEventListener("click", generateNew);

function generateNew() {
  // Validate password length
  if (x < 8 || x > 128) {
    alert("Please enter a number between 8 & 128");
    return;
  }

  var lowerCheck = document.getElementById("lowerBtn");
  var upperCheck = document.getElementById("upperBtn");
  var numCheck = document.getElementById("numBtn");
  var symCheck = document.getElementById("symBtn");

  if (lowerCheck.checked == true) {
    var newPasswordVal = "";
    newPasswordVal = randomLower();
  }

  if (upperCheck.checked == true) {
    var newPasswordVal = "";
    newPasswordVal += randomUpper();
  }

  if (numCheck.checked == true) {
    var newPasswordVal = "";
    newPasswordVal += randomNum();
  }

  if (symCheck.checked == true) {
    var newPasswordVal = "";
    newPasswordVal += randomSym();
  }

  for (var i = newPasswordVal.length; i < x; i++) {
    newPasswordVal += randomUpper();
  }

  console.log("newPasswordVal=" + newPasswordVal);

  document.getElementById("txtPassword").value = newPasswordVal;
}
