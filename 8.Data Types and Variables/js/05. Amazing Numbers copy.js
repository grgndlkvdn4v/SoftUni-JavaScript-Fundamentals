function amazingNumbers(num) {
  
  let numToStr = String(num);
  let sum = 0;

  //цикъл за намиране на сумата
  for (let currChar = 0; currChar < numToStr.length; currChar++) {
    sum += Number( numToStr[currChar] );
  }

  sum = sum.toString();
  let printLine = `${num} Amazing? `
  let output = sum.includes("9") ? "True" : "False";

  console.log(printLine + output);

}
amazingNumbers(1233);
// amazingNumbers(583472);
amazingNumbers(999);