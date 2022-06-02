function integerAndFloat(numOne, numTwo, numThree) {

  let sum = numOne + numTwo + numThree;
  let type;

  // if (sum % 1 === 0) {
  //   type = "Integer";
  // } else {
  //   type = "Float";
  // }

  sum % 1 === 0 ?  type = "Integer" : type = "Float";
  
  console.log(`${sum} - ${type}`);

}
integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303);