function magicSum(inputArray, magicNum) {
  let array = inputArray

  for (let currNumIndex = 0; currNumIndex < array.length; currNumIndex++) {
    const currNum = array[currNumIndex];

    for (let checkNumIndex = currNumIndex + 1; checkNumIndex < array.length; checkNumIndex++) {
      const checkNum = array[checkNumIndex];

      if (currNum + checkNum === magicNum) {
        console.log(currNum, checkNum);
      }
    }
  }

}
// magicSum([14, 20, 60, 13, 7, 19, 8], 27);
// magicSum([1, 7, 6], 8);
magicSum([1, 7, 6, 2, 19, 23], 8);
// magicSum([14, 20, 60, 13, 7, 19, 8], 27);
// magicSum([1, 2, 3, 4, 5, 6], 6);
