function addAndSubtract(numOne, numTwo, numThree) {

  let sumResult = sum(numOne, numTwo);

  let output = console.log(subtract(sumResult, numThree));

  return output;


  function sum(numOne, numTwo) {
    let sumResult = numOne + numTwo;
    return sumResult;
  }

  function subtract(sumResult, numThree) {
    let subResult = sumResult - numThree;
    return subResult;
  }

}
(addAndSubtract(23, 6, 10));
// addAndSubtract(1, 17, 30);