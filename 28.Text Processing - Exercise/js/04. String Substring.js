function stringSubstring(inputWord, inputText) {
  
  let word = inputWord.toLowerCase();
  let text = inputText.toLowerCase().split(" ");

  if (text.includes(word)) {
    console.log(word);
  } else {
    console.log(`${inputWord} not found!`);
  }

}

stringSubstring(
  "javascript",
  "JavaScript is the best programming language"
);

stringSubstring(
  "python",
  "JavaScript is the best programming language"
);