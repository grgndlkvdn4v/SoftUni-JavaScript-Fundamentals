function sumDigits(input) {

  let numToStr = input.toString();
  let sum = 0;

  for (let currChar = 0; currChar < numToStr.length; currChar++) {

    let currentDigit = Number(numToStr[currChar]);
    sum += currentDigit;
  }

  console.log(sum);

}
sumDigits(245678);