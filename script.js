//Assignment Code (starter code)
//This statement declares the variable "generateBtn" for the "Generate Password" button we see on the browser.
//document refers to the DOM, or Javascript Document Object.
//The DOM stores the elements of an HTML document as objects.
//querySelector() is a built-in Javascript method that allows you to get or retrieve a single element that matches the parameter being passed.
//#generate is an id selector used in the CSS file for styling the button.

var generateBtn = document.querySelector("#generate");

//Write password to the #password input (starter code)
//The "writePassword" function declares the variables "password" and "passwordText".
//It assigns the "password" variable to the output from the "generatePassword" function - which has no parameters.
//The value of passwordText is assigned to the variable password. 
//However, it is not clear to me what "passwordText" is. But, I do know that it prevents my password generation from working if I comment it out.
//"#password" is an id selector used in the CSS file for styling the password output box and text.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Add event listener to generate button (starter code)
//The JavaScript "addEventListener" method allows you to set up functions to be called when a specified event happens, such as when a user clicks a button.
//Here, it is being applied to the "generateBtn" variable to produce a random password from the "writePassword" function when the button is clicked.
generateBtn.addEventListener("click", writePassword);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

//My code
//The "howLong" variable is declared.
//"prompt" instructs the browser to display a dialog with an optional message prompting the user to input some text. In this case, the prompt asks the user for the number of characters they want their password to be.
//The built-in "number" function converts the object argument to a number that represents the object's value.
var howLong = Number(prompt("How long do you want your password to be? It should be greater than 8 and less than 128"));

//The "whatType" variable is declared.
//The user is asked what type of characters is desired.
var whatType = prompt("Do you want special, numeric, uppercase, or lowercase characters?");

//The "generatepassword" function is defined, which is the logic behind generating a random password.
//The variable "initialCharacter" is declared and assigned to an empty string.
//The variable "initialType" is declared and assigned to the value of the "whatType" variable after it is set to "lowercase" as a starting value for the IF statement.
//The IF statement then compares the value and the type of the "initialType variable" to each of the 4 options given to the user - lowercase, uppercase, numeric, or special.
//If the comparison evaluates to "True", then the "initialCharacter" variable is assigned to a string of values to choose from.
function generatePassword() {
  var initialCharacter = "";
  var initialType = whatType.toLowerCase();
  if(initialType === "lowercase") {
    initialCharacter = "abcdefghijklmnopqrstuvwxyz";
  } else if(initialType === "uppercase") {
    initialCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if(initialType === "numeric") {
    initialCharacter = "0123456789";
  } else if(initialType === "special") {
    initialCharacter = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  }

  //The variable "passwordReturned" is declared and initially assigned to an empty string.
  //The FOR loop starts at an index value of 0, loops through the selection of a random character from the string assigned to the "initialCharacter" variable incrementing by 1 each time, and then stops at one position less than the value entered for the "howLong" variable.
  //Because, the index starts at 0, it is ok to end the loop at a position one less than the "howLong" value.
  //At the end, a random password is returned.
  var passwordReturned = "";
  for (var i = 0; i < howLong; i++) {
    //picks a character within charSet at index of random number
    passwordReturned += initialCharacter.charAt(Math.floor(Math.random() * initialCharacter.length));
  }
  return passwordReturned;
}

//NOTE: The way my program works is to ask the user for the number of characters and the type of characters via a prompt box.
//Then, once the user has entered those values, the user should click the "Generate Password" button and it will return a random password based on the input.
