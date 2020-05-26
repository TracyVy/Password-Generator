const form = document.getElementById("passwordForm");
const charAmountRange = document.getElementById("charAmountRange");
const charAmountNum = document.getElementById("charAmountNum");
const lowerBoxEl = document.getElementById("lowerBox");
const upperBoxEl = document.getElementById("upperBox");
const numBoxEl = document.getElementById("numBox");
const symBoxEl = document.getElementById("symBox");

//Sync slider and numBox
charAmountRange.addEventListener("input", syncCharacterAmount);
charAmountNum.addEventListener("input", syncCharacterAmount);

function syncCharacterAmount(e) {
  const value = e.target.value;
  charAmountNum.value = value;
  charAmountRange.value = value;
}

// Validate checkbox values
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const charAmount = charAmountNum.value;
  const yesLower = lowerBoxEl.checked;
  const yesUpper = upperBoxEl.checked;
  const yesNum = numBoxEl.checked;
  const yesSym = symBoxEl.checked;
  const password = generatePassword(
    charAmount,
    yesUpper,
    yesLower,
    yesNum,
    yesSym
  );
  passwordDisplay.innerText = password;
});

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
  x = textInputLength.value;
  console.log("input length = " + x);

  // Validate password length
  if (x < 8 || x > 128) {
    alert("Please enter a number between 8 & 128");
    return;
  }

  var lowerCheck = document.getElementById("lowerBox");
  var upperCheck = document.getElementById("upperBox");
  var numCheck = document.getElementById("numBox");
  var symCheck = document.getElementById("symBox");

  var newPasswordVal = "";
  if (lowerCheck.checked == true) {
    console.log("lowerCheck.checked...");
    //var newPasswordVal = "";
    newPasswordVal += randomLower();
  }

  if (upperCheck.checked == true) {
    console.log("upperCheck.checked...");
    //var newPasswordVal = "";
    newPasswordVal += randomUpper();
  }

  if (numCheck.checked == true) {
    console.log("numCheck.checked...");
    //var newPasswordVal = "";
    newPasswordVal += randomNum();
  }

  if (symCheck.checked == true) {
    console.log(symCheck);
    //var newPasswordVal = "";
    newPasswordVal += randomSym();
  }

  for (var i = newPasswordVal.length; i < x; i++) {
    newPasswordVal += randomUpper();
  }

  console.log("newPasswordVal=" + newPasswordVal);

  document.getElementById("txtPassword").value = newPasswordVal;
}
