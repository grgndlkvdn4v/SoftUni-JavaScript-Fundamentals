function maxSequenceOfEqualElements(array) {

  let equalsCounter = 0;
  let maxEqualCounter = 0;
  let currSequence = array[0] + " ";
  let maxSequence = "";
  
  for (let index = 0; index < array.length; index++) {
    let currElement = array[index];
    let nextElement = array[index + 1];

    if (currElement === nextElement) {
      equalsCounter += 1;
      currSequence += currElement + " ";
      if (equalsCounter > maxEqualCounter) {
        maxEqualCounter = equalsCounter;
        maxSequence = currSequence;
      }
    } else {
      equalsCounter = 0;
      currSequence = nextElement + " ";
    }
  }

  console.log(maxSequence);

}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceOfEqualElements([4, 4, 4, 4]);

// Мисля, че може да се направи и с shift() и  while. Докато дължината на масива е по-голяма от 0, при всяка итерация  се отрязва нулевият индекс.
