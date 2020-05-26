const form = document.getElementById("passwordForm");
const charAmountRange = document.getElementById("charAmountRange");
const charAmountNum = document.getElementById("charAmountNum");
const lowerBoxEl = document.getElementById("lowerBox");
const upperBoxEl = document.getElementById("upperBox");
const numBoxEl = document.getElementById("numBox");
const symBoxEl = document.getElementById("symBox");
const passwordDisplay = document.getElementById("passwordDisplay");

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

// Identifying arrays in CharCode tables. Use concatination.
const lowerCharCodes = arrayChar(97, 122);
const upperCharCodes = arrayChar(65, 90);
const numCharCodes = arrayChar(48, 57);
const symCharCodes = arrayChar(33, 47)
  .concat(arrayChar(58, 64))
  .concat(arrayChar(91, 96))
  .concat(arrayChar(123, 126));

function arrayChar(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
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
