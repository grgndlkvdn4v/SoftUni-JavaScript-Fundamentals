function bombNumbers(inputArr, specialBombArr) {

  let resultArr = inputArr.slice()

  let specialNum = specialBombArr[0];
  let removeNums = specialBombArr[1];

  for (let el of resultArr) {

    if (el === specialNum) {
      let specialNumIndex = inputArr.indexOf(el);

      let startIndex = specialNumIndex - removeNums;
      let removeCount = (removeNums * 2) + 1;

      if (startIndex < 0) {
        startIndex = 0;
      }

      if (startIndex + removeCount > resultArr.length - 1) {
          removeCount = (resultArr.length) - startIndex;
        }
      
      resultArr.splice(startIndex, removeCount);
    }
  }

  // console.log(resultArr);
  let sum = 0;

  for (let el of resultArr) {
    sum += el;
  }
  console.log(sum);

}

// bombNumbers(
//   [1, 2, 2, 5, 2, 2, 4, 9], 
//   [4, 2] );

  // bombNumbers(
  //   [1, 2, 2, 4, 2, 2, 2, 9], 
  //   [4, 2] );

  bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
  bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
  bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);