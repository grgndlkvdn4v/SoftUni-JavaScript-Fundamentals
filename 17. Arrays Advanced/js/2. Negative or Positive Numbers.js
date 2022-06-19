function negativeOrPositiveNumbers(input) {
  
  let result = [];

  for (const iterator of input) {
    let currNum = Number(iterator);

    if (currNum < 0) {
      result.unshift(currNum);
    } else {
      result.push(currNum);
    }
  }

  console.log(result.join("\n"));

}
// negativeOrPositiveNumbers(['7', '-2', '8', '9']);
negativeOrPositiveNumbers(['3', '-2', '0', '-1']);