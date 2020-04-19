var x; // passwordLength
var newPasswordVal = '';
var textInputLength = document.getElementById('lengthInput');

textInputLength.addEventListener('keyup', validLength);

function yesFunction() {
  var checkbox = document.getElementById("yesNew");
  var text = document.getElementById("yesText");

  if (checkbox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
};

function validLength(e) {
  e.preventDefault();
  if (e.keyCode === 13) {
    x = document.getElementById('lengthInput').value;

    if (x >= 8 && x <= 128) {
      alert("Great!");
    } else {
      alert("Please enter a number between 8 & 128");
    }
  }
};

// Random generator functions
function randomLower() {
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  return lower[Math.floor(Math.random() * lower.length)];
}

function randomUpper() {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return upper[Math.floor(Math.random() * upper.length)];
}

function randomNum() {
  const num = '0123456789';
  return num[Math.floor(Math.random() * num.length)];
}

function randomSym() {
  const sym = '~!@#$%^&*()-+';
  return sym[Math.floor(Math.random() * sym.length)];
}


var btnGenerate = document.getElementById("btnGenerate");
btnGenerate.addEventListener("click", generateNew);

function generateNew() {

  var lowerCheck = document.getElementById("lowerBtn");
  var upperCheck = document.getElementById("upperBtn");
  var numCheck = document.getElementById("numBtn");
  var symCheck = document.getElementById("symBtn");

  if (lowerCheck.checked == true) {
    newPasswordVal = randomLower();
    //console.log('newPasswordVal=' + newPasswordVal);
  }

  if (upperCheck.checked == true) {
    newPasswordVal += randomUpper();
    // console.log('newPasswordVal=' + newPasswordVal);
  }

  if (numCheck.checked == true) {
    newPasswordVal += randomNum();
    // console.log('newPasswordVal=' + newPasswordVal);
  }

  if (symCheck.checked == true) {
    newPasswordVal += randomSym();
    // console.log('newPasswordVal=' + newPasswordVal);
  }

  for (var i = newPasswordVal.length; i < x; i++) {
    newPasswordVal += randomLower();
  }

  console.log('newPasswordVal=' + newPasswordVal);

}

