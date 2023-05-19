//making of global variables
var generateBtn = document.querySelector("#generate");
var passLength = 0;
var strings = ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()", "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890", "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz123456789", "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890", "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()", "123456789", "1234567890!@#$%^&*()", "!@#$%^&*()", "abcdefghijklmnopqrstuvwxyz!@#$%^&*()", "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()", "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()"];
// Write password to the #password input
function writePassword() {
    var finalresult = "";
    //prompt for length of password and allow numerical input->variable for length
    passLength = Number(prompt("How long would you like your password to be?"));
    //prompt individually for lowercase, uppercase, numeric, and special characters (use yes/no and store in boolean values)
    var lowercase = window.confirm("Do you want your password to have lowercase letters?");
    var uppercase = window.confirm("Do you want your password to have uppercase letters?");
    var specialchar = window.confirm("Do you want your password to have special characters?");
    var numbers = window.confirm("Do you want your password to have numbers?");
    //display all inputted answers and ask to make sure, exit the prompts if no selected
    if (window.confirm("Are these inputs okay?\n  Lowercase: "+lowercase+" \n  Uppercase: "+uppercase+" \n  Numbers: "+numbers+" \n  Special Characters: "+specialchar+"\n  Length: "+passLength)===true) {
    /*
        use if statements to see which array element to use
        use for loop with length as max
        generate password
    */
      if (lowercase && uppercase && specialchar && numbers) {
        var chars = strings[0];
        for (var i=0; i < passLength; i++) {
          var randomNumber = Math.floor(Math.random()*chars.length);
          finalresult += chars.substring(randomNumber, randomNumber+1);
        }
      }
      else if (lowercase && uppercase && specialchar===false && numbers) {
        var chars = strings[1];
        for (var i=0; i < passLength; i++) {
          var randomNumber = Math.floor(Math.random()*chars.length);
          finalresult += chars.substring(randomNumber, randomNumber+1);
        }
      }
      else if (lowercase && uppercase && specialchar===false && numbers===false) {
        var chars = strings[2];
        for (var i=0; i < passLength; i++) {
          var randomNumber = Math.floor(Math.random()*chars.length);
          finalresult += chars.substring(randomNumber, randomNumber+1);
        }
      }
      else if (lowercase && uppercase===false && specialchar===false && numbers===false) {
        var chars = strings[3];
        for (var i=0; i < passLength; i++) {
          var randomNumber = Math.floor(Math.random()*chars.length);
          finalresult += chars.substring(randomNumber, randomNumber+1);
        }
      }
      else if (lowercase && uppercase===false && specialchar===false && numbers) {
        var chars = strings[4];
        for (var i=0; i < passLength; i++) {
          var randomNumber = Math.floor(Math.random()*chars.length);
          finalresult += chars.substring(randomNumber, randomNumber+1);
        }
      }
      else if (lowercase && uppercase===false && specialchar && numbers) {
        var chars = strings[5];
        for (var i=0; i < passLength; i++) {
          var randomNumber = Math.floor(Math.random()*chars.length);
          finalresult += chars.substring(randomNumber, randomNumber+1);
        }
      }
      else if (lowercase===false && uppercase && specialchar===false && numbers===false) {
        var chars = strings[6];
        for (var i=0; i < passLength; i++) {
          var randomNumber = Math.floor(Math.random()*chars.length);
          finalresult += chars.substring(randomNumber, randomNumber+1);
        }
      }
      else if (lowercase===false && uppercase && specialchar===false && numbers) {
        var chars = strings[7];
        for (var i=0; i < passLength; i++) {
          var randomNumber = Math.floor(Math.random()*chars.length);
          finalresult += chars.substring(randomNumber, randomNumber+1);
        }
      }
      else if (lowercase===false && uppercase && specialchar && numbers) {
        var chars = strings[8];
        for (var i=0; i < passLength; i++) {
          var randomNumber = Math.floor(Math.random()*chars.length);
          finalresult += chars.substring(randomNumber, randomNumber+1);
        }
      }
      else if (lowercase===false && uppercase===false && specialchar===false && numbers) {
        var chars = strings[9];
        for (var i=0; i < passLength; i++) {
          var randomNumber = Math.floor(Math.random()*chars.length);
          finalresult += chars.substring(randomNumber, randomNumber+1);
        }
      }
      else if (lowercase===false && uppercase===false && specialchar && numbers) {
        var chars = strings[10];
        for (var i=0; i < passLength; i++) {
          var randomNumber = Math.floor(Math.random()*chars.length);
          finalresult += chars.substring(randomNumber, randomNumber+1);
        }
      }
      else if (lowercase===false && uppercase===false && specialchar && numbers===false) {
        var chars = strings[11];
        for (var i=0; i < passLength; i++) {
          var randomNumber = Math.floor(Math.random()*chars.length);
          finalresult += chars.substring(randomNumber, randomNumber+1);
        }
      }
      else if (lowercase && uppercase===false && specialchar && numbers===false) {
        var chars = strings[12];
        for (var i=0; i < passLength; i++) {
          var randomNumber = Math.floor(Math.random()*chars.length);
          finalresult += chars.substring(randomNumber, randomNumber+1);
        }
      }
      else if (lowercase===false && uppercase && specialchar && numbers===false) {
        var chars = strings[13];
        for (var i=0; i < passLength; i++) {
          var randomNumber = Math.floor(Math.random()*chars.length);
          finalresult += chars.substring(randomNumber, randomNumber+1);
        }
      }
      else if (lowercase && uppercase && specialchar && numbers===false) {
        var chars = strings[14];
        for (var i=0; i < passLength; i++) {
          var randomNumber = Math.floor(Math.random()*chars.length);
          finalresult += chars.substring(randomNumber, randomNumber+1);
        }
      }
    }
    else {
      return;
    }
  var passwordText = document.querySelector("#password");
  passwordText.value = finalresult; //changes text in the box to the newly generated password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
