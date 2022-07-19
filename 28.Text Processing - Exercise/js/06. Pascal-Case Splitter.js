function pascalCaseSplitter(input) {
  let wordsArr = [];

  let sequence = "";
  for (let index = 0; index < input.length; index++) {
    let currLetter = input[index];
    let checkLetter = input[index].toLowerCase();

    if (checkLetter === currLetter) {
      sequence += currLetter;
      if (index === input.length - 1) {
        wordsArr.push(sequence);
      }
    } 
    else {
      wordsArr.push(sequence);
      sequence = currLetter;
      if (index === input.length - 1) {
        wordsArr.push(sequence);
      }
    }
  }

  wordsArr.shift();
  console.log(wordsArr.join(", "));

}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');