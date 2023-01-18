var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["/", "~", "`", "!", "#", "$", "%", "^", "&", "*", "+", "=", "\", "-", ",];




// Assignment Code

var generateBtn = document.querySelector("#generate");

var generatePassword = function (){
  var options = [];

  var isUppercase = window.confirm ("Would you like to include Uppercase?")

  console.log(isUppercase);

  if (isUppercase) {

    for (var i of upperCase) {
        options.push(i)
    };
    console.log(options);
  }

  var isLowercase = window.confirm ("Would you like to include Lowercase?")

  console.log(isLowercase);

  if (isLowercase) {

    for (var i of lowerCase) {
        options.push(i)
    };
    console.log(options);
  }

  var isNumber = window.confirm ("Would you like to include a number?")

  console.log(isNumber);

  if (isNumber) {

    for (var i of number) {
        options.push(i)
    };
    console.log(options);
  }

  var isSpecial = window.confirm ("Would you like to include special characters?")

  console.log(isSpecial);

  if (isSpecial) {

    for (var i of special) {
        options.push(i)
    };
    console.log(options);
  }
  var passwordLength = window.prompt('How long do you want the password to be?');

  // check to make sure the user inputted a number and is greater than 8 and less than 128
  // check options.length is greater than 0

  let password = '';
  for (let i = 0; i < passwordLength; i++){
    var index = Math.floor(Math.random() * options.length);
    console.log(index);
    var computerChoice = options[index];
    console.log(computerChoice)
    password = password + computerChoice;
  }

  return password;




  // ask the user for lowercase
  // if lowercase
    // add all lowercase values to options array


    // loop through the options array
    // pull out random values for the password

};





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// generate();



