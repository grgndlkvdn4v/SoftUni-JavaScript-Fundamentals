function mirrorWords(input) {
  let text = input[0];
  let validPairsArr = [];

  let pattern = /([\@\#])(?<wordOne>[a-zA-Z]{3,})\1\1(?<wordTwo>[a-zA-Z]{3,})\1/gm;

  let matches;
  if ( text.match(pattern) !== null) {
    matches = (text.match(pattern)).length;
  }
  
  let match;
  while ( (match = pattern.exec(text)) !== null ) {

    let wordOne = match.groups['wordOne'];
    let wordTwo = match.groups['wordTwo'];
    let reverseWordTwo = wordTwo.split('').reverse().join('');

    if ( wordOne === reverseWordTwo) {
      let pair = `${wordOne} <=> ${wordTwo}`
      validPairsArr.push(pair);
    }
  }


  if ( matches > 0 ) {
    console.log(`${matches} word pairs found!`);
  } else {
    console.log( "No word pairs found!" );
  }


  if ( validPairsArr.length > 0 ) {
    console.log("The mirror words are:");
    console.log(validPairsArr.join(', '));
  } else {
    console.log(`No mirror words!`);
  }


}
mirrorWords([
  "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);