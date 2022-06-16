function passwordValidator(input) {

  let pass = input;
  let digitsCounter = 0;
  let twoDigits = false;
  let isValid = false;
  let lettersAndDigitsOnly = true;
  let symbol;

  let numsCondition = (
    symbol >= 48 && symbol <= 57 );
    
  let lettersCondition = (
    (symbol >= 65 && symbol <= 95) ||
    (symbol >= 97 && symbol <= 122) );


  if (pass.length < 6 || pass.length > 10)
    console.log("Password must be between 6 and 10 characters");

    for (let index of pass) {
      let symbol = index.charCodeAt(0);

      if (symbol >= 48 && symbol <= 57) {
        digitsCounter++;
        if (digitsCounter > 1){
          twoDigits === true;
          console.log("2 digits");
        }
      }
    }

    for (let index of pass) {
      symbol = index.charCodeAt(0);

      if ( numsCondition || lettersCondition ) {
        console.log("num or digit");
      } else {
        lettersAndDigitsOnly = false;
        console.log("Password must consist only of letters and digits");
        break;
      }
    }




}
passwordValidator('logIn22');