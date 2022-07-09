function wordOccurrences(input) {
  let wordsObj = {};

  for (const word of input) {
    if (!wordsObj[word]) {
      wordsObj[word] = 1;
    } else {
      wordsObj[word]++
    }
  }

  let entries = Object.entries(wordsObj)
  let sortedEntries = entries.sort( ([keyA, valueA], [keyB, valueB]) =>
    valueB - valueA 
  );

  for (const [word, occurrence] of sortedEntries) {
    console.log(`${word} -> ${occurrence} times`);
  }

}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);