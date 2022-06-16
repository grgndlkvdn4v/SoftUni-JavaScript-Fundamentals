function oddAndEvenSum(input) {

  let num = input;
  let strNum = String(num);

  let evenSum = 0; // четни
  let oddSum = 0;  // нечетни

  for (const digit of strNum) {

    const currDigit = Number(digit);

    if (currDigit % 2 === 0) {
      evenSum += currDigit;
    } else {
      oddSum += currDigit;
    }
  }

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}
oddAndEvenSum(1000435);
// oddAndEvenSum(3495892137259234);