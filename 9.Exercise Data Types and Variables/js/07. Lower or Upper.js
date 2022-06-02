function lowerOrUpper(letter) {

  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let isLower = false;

  for (let currLetter = 0; currLetter < alphabet.length; currLetter++) {

    if (letter === alphabet[currLetter]) {
      isLower = true;
      break;
    }
  }

  if (isLower) {
    console.log("lower-case");
  } else {
    console.log("upper-case");
  }

}
lowerOrUpper("L");
lowerOrUpper("e");