function sumEvenNumbers(array) {

  let evenSum = 0;

  for (let iterator of array) {

    iterator = Number(iterator);
    if (iterator % 2 === 0) {
      evenSum += iterator;
    }
  }

  console.log(evenSum);

}
sumEvenNumbers(['1','2','3','4','5','6']);
// sumEvenNumbers(['3','5','7','9']);
// sumEvenNumbers(['2','4','6','8','10']);