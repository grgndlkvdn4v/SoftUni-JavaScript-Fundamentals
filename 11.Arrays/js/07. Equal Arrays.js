function equalArrays(arrOne, arrTwo) {

  let areIdentical = true;
  let sum = 0;

  for (let index = 0; index < arrOne.length; index++) {
    
    let elemOne = arrOne[index];
    let elemTwo = arrTwo[index];
    if (elemOne !== elemTwo) {
      areIdentical = false;
      console.log(`Arrays are not identical. Found difference at ${index} index`);
      break;
    }
    else {
      sum += Number(elemOne);
    }
  }
  if (areIdentical) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }

}
equalArrays(['10','20','30'], ['10','20','30']);
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']);
equalArrays(['1'], ['10']);