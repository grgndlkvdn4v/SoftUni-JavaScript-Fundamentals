function triplesOfLatinLetters(num) {

  let alphabet = "abcdefghijklmnopqrstuvwxyz"

  for (let numOne = 0; numOne < num; numOne++) {
    let first = String.fromCharCode(97 + numOne);

    for (let numTwo = 0; numTwo < num; numTwo++) {
      let second = String.fromCharCode(97 + numTwo);

      for (let numThree = 0; numThree < num; numThree++) {
    let third = String.fromCharCode(97 + numThree);
        
        console.log(`${first}${second}${third}`);   
      }
    }
  }

}
triplesOfLatinLetters(3);
// triplesOfLatinLetters(2);