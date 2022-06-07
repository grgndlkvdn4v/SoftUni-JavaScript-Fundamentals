function magicSum(inputArray, magicNum) {
  let array = inputArray;
  // let arrayLength = array.length;

    for (let currNumIndex = 0; currNumIndex < array.length; currNumIndex++) {
      let currNum = array[currNumIndex];

      for (let checkNumIndex = 0; checkNumIndex < array.length; checkNumIndex++) {
        let checkNum = array[checkNumIndex];

        if (currNum !== checkNum) {
          if (currNum + checkNum === magicNum) {
            console.log(currNum + " " + checkNum);
            array[currNumIndex] = undefined;
            array[checkNumIndex] = undefined;
          }
        }

    }
  }

}
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
// magicSum([1, 7, 6], 8);
// magicSum([1, 7, 6, 2, 19, 23], 8);
// magicSum([14, 20, 60, 13, 7, 19, 8], 27);
// magicSum([1, 2, 3, 4, 5, 6], 6);
