function printAndSum(start, end) {

  let sum = 0;
  let printLine = ``;

  for (let i = start; i <= end; i++) {
    sum += i;

    //премахване на "space" от последната цифра
    if (i !== end) {
      printLine += `${i} `
    } else {
      printLine += `${i}`
    }
  }

  console.log(printLine); 
  console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);