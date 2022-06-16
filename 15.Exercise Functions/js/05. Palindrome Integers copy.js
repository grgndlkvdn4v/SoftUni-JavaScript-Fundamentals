function palindromeIntegers(input) {

  let inputArray = input;

  for (const curNum of inputArray) {
    let curNumToStr = curNum.toString();
    let curArr = curNumToStr.split("");

    let isPalindrome = false;
    let trueCounter = 0;
    let iterations = parseInt(curArr.length / 2)


    for (let index = 0; index < iterations; index++) {
      const leftSide = curArr[index];
      const rightSide = curArr[(curArr.length - 1) - index];

      if (leftSide === rightSide) {
        trueCounter++;
      }
        if (trueCounter === iterations) {
          isPalindrome = true;
        }
      
    }

    if (isPalindrome) {
      console.log(true);
    } else {
      console.log(false);
    }

  }


}
// palindromeIntegers([121, 1234]);
palindromeIntegers([123,323,421,121]);
// palindromeIntegers([32,2,232,1010]);