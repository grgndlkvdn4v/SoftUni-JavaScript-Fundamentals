function sumFirstAndLastArrayElements(array) {
  
  let firstNum = array[0],
      secondNum = array[array.length - 1];

  console.log(firstNum + secondNum);

}
sumFirstAndLastArrayElements([20, 30, 40]);
sumFirstAndLastArrayElements([10, 17, 22, 33]);
sumFirstAndLastArrayElements([11, 58, 69]);