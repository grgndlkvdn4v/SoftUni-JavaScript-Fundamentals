function countStringOccurrences(sentence, word) {

  let newSentance = sentence.split(" ");
  let occurrence = 0;
  for (const checkWord of newSentance) {
    if (checkWord === word) {
      occurrence++;
    }
  }

  console.log(occurrence);
}
countStringOccurrences("This is a word and it also is a sentence", "is");