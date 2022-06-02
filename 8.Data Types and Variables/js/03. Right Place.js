function rightPlace(firstStr, char, secondStr) {

  let newStr = "";

  for (let i = 0; i < firstStr.length; i++) {

    // if (firstStr[i] !== "_") {
    //   newStr += firstStr[i]
    // } else {
    //   newStr += char;
    // }

    firstStr[i] !== "_" ? newStr += firstStr[i] :  newStr += char;
  }

  // if (newStr === secondStr) {
  //   console.log("Matched");
  // } else {
  //   console.log("Not Matched");
  // }

  console.log( (newStr === secondStr) ? "Matched" : "Not Matched" );

}
rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');