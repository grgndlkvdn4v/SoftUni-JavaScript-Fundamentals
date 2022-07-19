function passwordGenerator(input) {
  // A, E, I, O, U, and sometimes Y   
  let vowel = ['a', 'e', 'i', 'o', 'u'];

  let concatanated = input[0].concat(input[1]).toLowerCase();
  let thirdWord = input[2];
  let password = "";
  
  let index = 0;
  for (let letter of concatanated) {

    if (!vowel.includes(letter)) {
      password += letter;
    } 
    else {
      if (index > thirdWord.length - 1) { index = 0; }
      password += thirdWord[index++].toUpperCase();
    }

  }

  console.log(`Your generated password is ${password.split("").reverse().join("")}` );
}
passwordGenerator(["ilovepiZza", "ihatevegetables", "orange"]);