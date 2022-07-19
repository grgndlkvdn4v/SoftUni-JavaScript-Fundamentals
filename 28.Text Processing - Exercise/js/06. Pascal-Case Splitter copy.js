function pascalCaseSplitter(input) {
  let wordsArr = [];

  let sequence = "";
  for (const letter of input) {
    let checkNum = letter.charCodeAt(0);

    if (checkNum >= 65 && checkNum <= 90) {
      wordsArr.push(sequence);
      sequence = letter;
    } else {
      sequence += letter;
    }

  }
  wordsArr.push(sequence);
  wordsArr.shift();

  console.log(wordsArr.join(", "));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');