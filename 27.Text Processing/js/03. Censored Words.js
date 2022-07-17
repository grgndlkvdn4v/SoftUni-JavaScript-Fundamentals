function censoredWords(sentence, word) {
  
  let censoredWord = "*".repeat(word.length);
  let replacedText = sentence;

  while (replacedText.includes(word)) {
    replacedText = replacedText.replace(word, censoredWord);
  }
  
  console.log(replacedText);
}
censoredWords('A small sentence with some words', 'small');