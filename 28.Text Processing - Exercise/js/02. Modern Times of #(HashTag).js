function modernTimesOfHashTag(input) {
  let text = input.split(" ");

  for (let word of text) {

    if (word[0] === "#" && word.length > 1) {
      word = word.replace("#", "")
      // word = word.slice(1)

      let onlyLetters = true;
      for (const symbol of word) {
        let checkNum = symbol.toLowerCase().charCodeAt(0);
        
        if ( !(checkNum >= 97 && checkNum <= 122) ) {
          onlyLetters = false;
          break;
        }
      }

      if (onlyLetters) {
        console.log(word);
      }
    }

  }

}
modernTimesOfHashTag(
  "Nowadays everyone uses # to tag a #special word in #socialMedia"
);