function replaceRepeatingChars(input) {
  let lettersArr = [];

  for (const symbol of input) {
    if (lettersArr[lettersArr.length - 1] !== symbol) {
      lettersArr.push(symbol)
    }
  }

  console.log(lettersArr.join(""));
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');