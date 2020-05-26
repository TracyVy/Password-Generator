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

// Generate password function with join and concat
function generatePassword(charAmount, yesLower, yesUpper, yesNum, yesSym) {
  let charCodes = lowercaseCharCodes;
  if (yesLower) charCodes = charCodes.concat(lowerCharCodes);
  if (yesUpper) charCodes = charCodes.concat(upperCharCodes);
  if (yesNum) charCodes = charCodes.concat(numCharCodes);
  if (yesSym) charCodes = charCodes.concat(symCharCodes);
  const passwordCharacters = [];
  for (let i = 0; i < charAmount; i++) {
    const characterCode =
      charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }
  return passwordCharacters.join("");
}
