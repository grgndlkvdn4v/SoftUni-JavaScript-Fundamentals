function emojiDetector(input) {
  let text = input[0];
  let emojisObg = {};

  let numsPattern = /[0-9]/g;
  let emojiPatten = /([\:\*]{2})([A-Z][a-z]{2,})\1/g;

  let matchesNumsArr = text.match(numsPattern);

  let threshold;
  if ( matchesNumsArr ) {
    threshold = matchesNumsArr.map(Number).reduce((a, b)=> a*b, 1)
  } else {
    threshold = 0;
  }
  console.log(`Cool threshold: ${threshold}`);


  let emojisMatch, emojisCounter = 0;
  while ( (emojisMatch = emojiPatten.exec(text)) !== null ) {
    emojisCounter++;
    let emoji = emojisMatch[2];

    if ( coolness(emoji) >= threshold ) {
      emojisObg[emojisMatch[0]] = coolness(emoji);
    }
  }

  
  console.log( `${emojisCounter} emojis found in the text. The cool ones are:` );
  for (const emoji in emojisObg) {
    console.log(emoji);
  }


  function coolness(emoji) {
    let coolnes = 0;
    for (const symbol of emoji) {
      coolnes += symbol.charCodeAt();
    }
    return coolnes;
  }

}
// emojiDetector([
//   "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**",
// ]);

emojiDetector([
  "It is a long established fact that  a reader will be distracted by  the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal  distribution of letters, as opposed to using 'Content here, content  here', making it look like readable **English**.",
]);