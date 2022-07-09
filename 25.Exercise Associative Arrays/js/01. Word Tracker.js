function wordTracker(input) {
  let occurrencesObj = {}
  let searchedWordsArr = input.shift().split(" ");

  for (const searchedWord of searchedWordsArr) {
    occurrencesObj[searchedWord] = 0;
    
    for (const word of input) {
      if (searchedWord === word) {
        occurrencesObj[searchedWord]++;
      }
    }

  }

  let entries = Object.entries(occurrencesObj);
  let sortedEntries = entries.sort( ([keyA, valueA], [keyB, valueB]) =>
    valueB - valueA
  );
  
  for (const [word, occurrence] of sortedEntries) {
      console.log(`${word} - ${occurrence}`);
  }

}

// wordTracker([
//   'this sentence', 
//   'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
//   ]);

wordTracker([
  'another dsax', 
  'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'
  ])