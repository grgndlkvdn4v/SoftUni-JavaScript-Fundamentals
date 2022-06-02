function triplesOfLatinLetters(num) {

  let alphabet = "abcdefghijklmnopqrstuvwxyz"

  for (let numOne = 0; numOne < num; numOne++) {

    for (let numTwo = 0; numTwo < num; numTwo++) {

      for (let numThree = 0; numThree < num; numThree++) {

        console.log(`${alphabet[numOne]}${alphabet[numTwo]}${alphabet[numThree]}`);   
      }
    }
  }

}
triplesOfLatinLetters(3);
// triplesOfLatinLetters(2);