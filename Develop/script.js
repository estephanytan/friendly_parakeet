// Assignment code here



function generatePassword(length, lowercase, uppercase, numeric, special) {

  let word = "";
  if(lowercase){
    word += "abcdefghijklmnopqrstuvwxyz";
  }
  if(uppercase){
    word += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if(numeric){
    word += "1234567890";
  }
  if(special){
    word += "!@#$%^&*";
  }

  let password = [];

  while (password.length < length) {
    const character = word[Math.floor(Math.random() * word.length)];
    password.push(character)
  }

  return password.join("");
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


function writePassword() {
  
  let length = prompt("Choose a length between 8-218");
  let lowercase = confirm("Do you want to include lowercase?");
  let uppercase = confirm("Do you want to include uppercase?");
  let numeric = confirm("Do you want to include numbers?");
  let special = confirm("Do you want to include an special character?");
  var password = generatePassword(length,lowercase,uppercase,numeric,special);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
