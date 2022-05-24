function login(input) {

  let index = 0
  const username = input[index++];
  let password = ``;

  let isBlocked = false;
  let counter = 0;

  // цикъл за генериране на паролата 
  for (let i = username.length - 1; i >= 0; i--) {
    password += username[i];
  }

  // цикъл за броене на опитите на въвеждане
  for (let i = 1; i <= 4; i++){

    let fillInPass = input[index++];

    if (fillInPass === password) {
      break;
    } else {
      counter++;
      if (counter >= 4) {
        isBlocked = true;
        break;
      }
      console.log("Incorrect password. Try again.");
    }
  }

  if(!isBlocked) {
    console.log(`User ${username} logged in.`);
  } else {
    console.log(`User ${username} blocked!`);
  }

}

login(['Acer','login','go','let me in','recA']);
// login(['Acer','login', 'recA','go','let me in','recA']);
// login(['sunny','rainy','cloudy','sunny','not sunny']);