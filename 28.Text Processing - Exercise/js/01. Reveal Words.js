function revealWords(words, text) {
  let wordsArr = words.split(", ")
  let sentanceArr = text.split(" ");

  for (const word of sentanceArr) {
    for (const iterator of wordsArr) {

      if ( "*".repeat(iterator.length) === word) {
        text = text.replace("*".repeat(iterator.length), iterator)
      }

    }
  }

  console.log(text);
}
revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);