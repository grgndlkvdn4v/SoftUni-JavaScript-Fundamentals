function maxNumber(array) {

  let printLine = "";

  for (let i = 0; i < array.length; i++) {

    let currNum = array[i];
    let isBigger = true;

    for (let j = i + 1; j < array.length; j++) {
      let checkNum = array[j];

      if (currNum <= checkNum) {
        isBigger = false;
        break;
      }
      
    }

    if(isBigger) {
      printLine += currNum + " ";
    }
  }

  console.log(printLine);
  
}
maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);