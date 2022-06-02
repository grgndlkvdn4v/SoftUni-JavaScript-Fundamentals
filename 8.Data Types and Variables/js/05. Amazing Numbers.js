function amazingNumbers(num) {
  
  let numToStr = String(num);
  let sum = 0;
  let isMagic = false;

  //цикъл за намиране на сумата
  for (let currChar = 0; currChar < numToStr.length; currChar++) {
    sum += Number( numToStr[currChar] );
  }

  sum = sum.toString();

  //цикъл за обхождане на символитее на сумата
  for (let currChar = 0; currChar < sum.length; currChar++) {
    if (sum[currChar] == 9) {
      isMagic = true;
      break;
    }
  }

  //printline
  if (isMagic) {
    console.log(`${num} Amazing? True`);
  } else {
    console.log(`${num} Amazing? False`);
  }

}
amazingNumbers(1233);
// amazingNumbers(583472);
amazingNumbers(999);