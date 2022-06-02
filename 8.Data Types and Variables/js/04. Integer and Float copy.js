function integerAndFloat(numOne, numTwo, numThree) {

  let sum = numOne + numTwo + numThree;
  let type;

  Number.isInteger(sum) ? type = "Integer" : type = "Float";
  
  console.log(`${sum} - ${type}`);

}
integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303);