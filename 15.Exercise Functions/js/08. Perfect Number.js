function perfectNumber(num) {

  let sum = 0;
  let sumArr = [];

  for (let curNum = 1; curNum <= num - 1; curNum++) {
    if (num % curNum === 0) {
      sum += curNum
      sumArr.push(curNum);
    }
  }

  if (sum === num) {
    console.log("We have a perfect number!");
  } else {
    console.log("It's not so perfect.");
  }


}
perfectNumber(6);