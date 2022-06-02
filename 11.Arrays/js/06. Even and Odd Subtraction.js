function evenAndOddSubtraction(array) {

  let evenSum = 0,
      oddSum = 0;

  for (let iterator of array) {

    if (iterator % 2 === 0) {
      evenSum += iterator;
    } else {
      oddSum += iterator;
    }
  }

  // let diff = Math.abs(evenSum - oddSum);
  let diff = evenSum - oddSum;
  console.log(diff);

}
evenAndOddSubtraction([1,2,3,4,5,6]);