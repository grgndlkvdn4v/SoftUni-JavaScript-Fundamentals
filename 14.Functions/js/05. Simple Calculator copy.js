function simpleCalculator(numOne, numTwo, operator) {

  let res;

  switch (operator) {
    case 'multiply':
      res = (numOne, numTwo) => numOne * numTwo;
      break;

    case 'divide':
      res = (numOne, numTwo) => numOne / numTwo;
      break;

    case 'add':
      res = (numOne, numTwo) => numOne + numTwo;
      break;

    case 'subtract':
      res = (numOne, numTwo) => numOne - numTwo;
      break;

  }

  console.log(res(numOne, numTwo));

}
simpleCalculator(5, 5, "multiply");
simpleCalculator(25, 5, "devide");
simpleCalculator(5, 5, "add");
simpleCalculator(25, 5, "subtract");
// console.log(simpleCalculator(5, 5, "add"));