function simpleCalculator(numOne, numTwo, operator) {

  let result;

  switch (operator) {
    case 'multiply':
      console.log(multiply(numOne, numTwo))
      break;

    case 'devide':
      console.log(devide(numOne, numTwo))
      break;

    case 'add':
      console.log(add(numOne, numTwo))
      break;

    case 'subtract':
      console.log(subtract(numOne, numTwo))
      break;

  }


  function multiply(numOne, numTwo) {
    result = numOne * numTwo;
    return result;
    }

  function devide(numOne, numTwo) {
    result = numOne / numTwo;
    return result;
  }

  function add(numOne, numTwo) {
    result = numOne + numTwo;
      return result;
    }

  function subtract(numOne, numTwo) {
      result = numOne - numTwo;
      return result;
    }

}
simpleCalculator(5, 5, "multiply");
simpleCalculator(5, 5, "multiply");
// console.log(simpleCalculator(5, 5, "add"));