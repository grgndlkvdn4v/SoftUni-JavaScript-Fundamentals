function oddAndEvenSum(input) {
  
  let num = input;
  let strNum = String(num);

  let evenSum = 0; // четни
  let oddSum = 0;  // нечетни

  function odds(strNum) {
    for (let currChar = 0; currChar < strNum.length; currChar++) {
      const currDigit = Number(strNum[currChar]);

      if (currDigit % 2 !== 0) {
        oddSum += currDigit;
      }
    }
    return oddSum;
  }

  function evens(strNum) {
    for (let currChar = 0; currChar < strNum.length; currChar++) {
      const currDigit = Number(strNum[currChar]);
      if (currDigit % 2 === 0) {
        evenSum += currDigit;
      }
    }
    return evenSum;
  }


  console.log(`Odd sum = ${odds(strNum)}, Even sum = ${evens(strNum)}`);

}