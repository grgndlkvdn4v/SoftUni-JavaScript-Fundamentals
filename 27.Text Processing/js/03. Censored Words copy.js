function censoredWords(text, word) {
  
  let newText = text.split(word);
  // console.log(newText);
  let res = newText.join("*".repeat(word.length));
  console.log(res);
}
censoredWords('A small sentence with small some words', 'small');