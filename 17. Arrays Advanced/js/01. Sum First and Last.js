function sumFirstAndLast(array) {

  let firstNum = Number(array[0]);
  let lastNum = Number(array[array.length - 1]);

  let result = firstNum + lastNum;
  console.log(result);

}
sumFirstAndLast(['20', '30', '40']);