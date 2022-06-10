function signCheck(numOne, numTwo, numThree) {

  let positiveCondition = 
  (numOne > 0 && numTwo > 0 && numThree > 0) ||
  (numOne > 0 && numTwo < 0 && numThree < 0) ||
  (numOne < 0 && numTwo < 0 && numThree > 0) ||
  (numOne < 0 && numTwo > 0 && numThree < 0) ;

  if (positiveCondition) {
    console.log("Positive");
  } else {
    console.log("Negative");
  }

}
signCheck(5, 12, -15);
signCheck(-6, -12, 14);